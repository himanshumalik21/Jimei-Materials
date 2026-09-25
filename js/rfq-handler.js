/**
 * Jimei Materials — Web3Forms RFQ & Contact Handler
 * Official Web3Forms asynchronous submission with client validation,
 * honeypot spam protection, UI feedback and data preservation.
 */

window.JIMEI_CONFIG = window.JIMEI_CONFIG || {
  // Web3Forms Access Key
  web3forms_access_key: "37a186c8-4229-4101-ae8e-a480e50b9942",
  recipient_email: "sales@jimei-materials.com"
};

document.addEventListener("DOMContentLoaded", function () {
  const rfqForm = document.getElementById("rfqForm") || document.getElementById("form");
  if (!rfqForm) return;

  const submitBtn = rfqForm.querySelector("button[type="submit"]");
  const alertContainer = document.getElementById("rfqAlertContainer") || createAlertContainer(rfqForm);

  rfqForm.addEventListener("submit", async function (e) {
    e.preventDefault();

    // Reset status
    hideAlert(alertContainer);

    // Validate required fields
    if (!rfqForm.checkValidity()) {
      e.stopPropagation();
      rfqForm.classList.add("was-validated");
      showAlert(alertContainer, "danger", "Please fill in all required fields accurately before submitting.");
      return;
    }

    // Honeypot check (botcheck)
    const botcheck = rfqForm.querySelector("input[name="botcheck"]");
    if (botcheck && botcheck.checked) {
      console.warn("Bot detected via honeypot.");
      return;
    }

    // Set Access Key from config if empty
    let accessKeyInput = rfqForm.querySelector("input[name="access_key"]");
    if (!accessKeyInput) {
      accessKeyInput = document.createElement("input");
      accessKeyInput.type = "hidden";
      accessKeyInput.name = "access_key";
      rfqForm.appendChild(accessKeyInput);
    }
    if (!accessKeyInput.value || accessKeyInput.value === "YOUR_ACCESS_KEY_HERE") {
      accessKeyInput.value = window.JIMEI_CONFIG.web3forms_access_key;
    }

    // Ensure recipient / subject are set
    let subjectInput = rfqForm.querySelector("input[name="subject"]");
    if (!subjectInput) {
      subjectInput = document.createElement("input");
      subjectInput.type = "hidden";
      subjectInput.name = "subject";
      subjectInput.value = "New Engineering RFQ / Inquiry — Jimei Materials";
      rfqForm.appendChild(subjectInput);
    }

    // Disable button & show spinner
    const originalBtnText = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.innerHTML = "<span class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>Transmitting RFQ...";

    try {
      const formData = new FormData(rfqForm);

      // Submit to Web3Forms endpoint
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const result = await response.json();

      if (response.status === 200 && result.success) {
        showAlert(
          alertContainer,
          "success",
          "<strong>Inquiry Received Successfully!</strong> Thank you for contacting Jimei Materials. Our engineering and sales team will review your specifications and reply to your business email within 24 hours. For drawings, you may also email direct to sales@jimei-materials.com."
        );
        rfqForm.reset();
        rfqForm.classList.remove("was-validated");
      } else {
        // Handle mock or invalid access key gracefully in dev / demo
        const msg = result.message || "Failed to submit inquiry.";
        if (msg.toLowerCase().includes("access key") || msg.toLowerCase().includes("invalid")) {
          showAlert(
            alertContainer,
            "warning",
            "<strong>Note:</strong> Web3Forms access key is currently in configuration mode. Your request details have been preserved. Please direct urgent inquiries to <strong>sales@jimei-materials.com</strong> or configure a valid Web3Forms key."
          );
        } else {
          showAlert(alertContainer, "danger", `<strong>Submission Error:</strong> ${msg}. Your entered information has been preserved.`);
        }
      }
    } catch (err) {
      console.error("Submission failed:", err);
      showAlert(
        alertContainer,
        "danger",
        "<strong>Network Error:</strong> Unable to connect to the submission server. Your input has been saved. Please contact us directly at <strong>sales@jimei-materials.com</strong> or call <strong>+86-147-4537-3293</strong>."
      );
    } finally {
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalBtnText;
    }
  });

  function createAlertContainer(form) {
    const div = document.createElement("div");
    div.id = "rfqAlertContainer";
    div.className = "mb-4";
    form.parentNode.insertBefore(div, form);
    return div;
  }

  function showAlert(container, type, message) {
    container.innerHTML = `
      <div class="alert alert-${type} alert-dismissible fade show" role="alert">
        ${message}
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>
    `;
    container.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }

  function hideAlert(container) {
    container.innerHTML = "";
  }
});
