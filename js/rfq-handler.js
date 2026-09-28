/**
 * Jimei Materials — Web3Forms Lead Generation & RFQ Handler
 * Official Web3Forms asynchronous submission with client validation,
 * structured email formatting, source/UTM tracking, honeypot spam protection,
 * and Google Analytics 4 conversion event logging.
 */

window.JIMEI_CONFIG = window.JIMEI_CONFIG || {
  web3forms_access_key: "37a186c8-4229-4101-ae8e-a480e50b9942",
  recipient_email: "sales@jimei-materials.com"
};

document.addEventListener("DOMContentLoaded", function () {
  // 1. Automatic UTM & Source Tracking on All Links and Forms
  const urlParams = new URLSearchParams(window.location.search);
  const utmSource = urlParams.get("utm_source") || "";
  const utmMedium = urlParams.get("utm_medium") || "";
  const utmCampaign = urlParams.get("utm_campaign") || "";
  const referrer = document.referrer || "direct";
  const pagePath = window.location.pathname || "/";

  // 2. Outbound Contact Engagement Tracking (Reduces False 100% Bounce Rates)
  document.querySelectorAll('a[href^="mailto:"], a[href^="tel:"]').forEach(link => {
    link.addEventListener("click", function () {
      if (typeof gtag === "function") {
        gtag("event", "contact_click", {
          event_category: "engagement",
          event_label: this.getAttribute("href"),
          source_page: pagePath
        });
      }
    });
  });

  // 3. Form Setup & Handling
  const rfqForm = document.getElementById("rfqForm") || document.getElementById("form");
  if (!rfqForm) return;

  const submitBtn = rfqForm.querySelector('button[type="submit"]');
  const alertContainer = document.getElementById("rfqAlertContainer") || createAlertContainer(rfqForm);
  const pageLoadTime = Date.now();

  rfqForm.addEventListener("submit", async function (e) {
    e.preventDefault();
    hideAlert(alertContainer);

    // Validate required fields
    if (!rfqForm.checkValidity()) {
      e.stopPropagation();
      rfqForm.classList.add("was-validated");
      showAlert(alertContainer, "danger", "Please complete all required fields marked with an asterisk (*).");
      return;
    }

    // Bot defense 1: Honeypot check
    const botcheck = rfqForm.querySelector('input[name="botcheck"]');
    if (botcheck && botcheck.checked) {
      console.warn("Submission blocked by honeypot.");
      return;
    }

    // Bot defense 2: Too rapid submission (<1.5 seconds)
    if (Date.now() - pageLoadTime < 1500) {
      console.warn("Submission blocked: submitted too quickly.");
      return;
    }

    // Set Access Key
    let accessKeyInput = rfqForm.querySelector('input[name="access_key"]');
    if (!accessKeyInput) {
      accessKeyInput = document.createElement("input");
      accessKeyInput.type = "hidden";
      accessKeyInput.name = "access_key";
      rfqForm.appendChild(accessKeyInput);
    }
    if (!accessKeyInput.value || accessKeyInput.value === "YOUR_ACCESS_KEY_HERE") {
      accessKeyInput.value = window.JIMEI_CONFIG.web3forms_access_key;
    }

    // Extract Form Values for Structured Lead Assembly
    const name = (rfqForm.querySelector('[name="name"]') || {}).value || "";
    const email = (rfqForm.querySelector('[name="email"]') || {}).value || "";
    const company = (rfqForm.querySelector('[name="company"]') || {}).value || "";
    const country = (rfqForm.querySelector('[name="country"]') || {}).value || "";
    const phone = (rfqForm.querySelector('[name="phone"]') || {}).value || "";
    const tech = (rfqForm.querySelector('[name="technology"]') || {}).value || "Ceramic Substrate";
    const app = (rfqForm.querySelector('[name="application"]') || {}).value || "Not Specified";
    const material = (rfqForm.querySelector('[name="ceramic_material"]') || {}).value || "Not Specified";
    const cerThickness = (rfqForm.querySelector('[name="ceramic_thickness"]') || {}).value || "Not Specified";
    const cuThickness = (rfqForm.querySelector('[name="copper_thickness"]') || {}).value || "Not Specified";
    const dimensions = (rfqForm.querySelector('[name="dimensions"]') || {}).value || "Not Specified";
    const quantity = (rfqForm.querySelector('[name="quantity"]') || rfqForm.querySelector('[name="quantity_phase"]') || {}).value || "Not Specified";
    const stage = (rfqForm.querySelector('[name="target_stage"]') || {}).value || "Not Specified";
    const delivery = (rfqForm.querySelector('[name="delivery_date"]') || {}).value || "Standard";
    const specs = (rfqForm.querySelector('[name="message"]') || rfqForm.querySelector('[name="technical_specs"]') || {}).value || "";

    // Compute Dynamic Structured Subject Line
    const subjectPrefix = tech.includes("(") ? tech.split("(")[0].trim() : tech;
    const computedSubject = `New ${subjectPrefix} RFQ: ${company || name || "Customer Inquiry"}`;
    
    let subjectInput = rfqForm.querySelector('input[name="subject"]');
    if (!subjectInput) {
      subjectInput = document.createElement("input");
      subjectInput.type = "hidden";
      subjectInput.name = "subject";
      rfqForm.appendChild(subjectInput);
    }
    subjectInput.value = computedSubject;

    // Structured Lead Format for Jimei Sales Inbox
    const structuredSummary = [
      `New ${subjectPrefix} RFQ`,
      `Customer: ${name}`,
      `Company: ${company}`,
      `Country: ${country}`,
      `Email: ${email} | Phone: ${phone || 'N/A'}`,
      `Technology: ${tech}`,
      `Application: ${app}`,
      `Material: ${material}`,
      `Ceramic Thickness: ${cerThickness}`,
      `Copper Thickness: ${cuThickness}`,
      `Dimensions: ${dimensions}`,
      `Quantity: ${quantity}`,
      `Target Stage: ${stage}`,
      `Required Delivery: ${delivery}`,
      `Technical Requirements: ${specs}`,
      `Source Page: ${pagePath}`,
      `UTM: source=${utmSource || 'direct'}, medium=${utmMedium || 'none'}, campaign=${utmCampaign || 'none'}`,
      `Referrer: ${referrer}`
    ].join("\n");

    // Append structured summary field
    let summaryInput = rfqForm.querySelector('input[name="rfq_summary"]');
    if (!summaryInput) {
      summaryInput = document.createElement("input");
      summaryInput.type = "hidden";
      summaryInput.name = "rfq_summary";
      rfqForm.appendChild(summaryInput);
    }
    summaryInput.value = structuredSummary;

    // Append tracking fields
    appendHiddenField(rfqForm, "source_page", pagePath);
    appendHiddenField(rfqForm, "utm_source", utmSource);
    appendHiddenField(rfqForm, "utm_medium", utmMedium);
    appendHiddenField(rfqForm, "referrer", referrer);

    // Disable button & trigger Loading State
    const originalBtnText = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<span class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>Transmitting RFQ to Engineering...';

    try {
      const formData = new FormData(rfqForm);

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const result = await response.json();

      if (response.status === 200 && result.success) {
        // Success State
        showAlert(
          alertContainer,
          "success",
          "<strong>Inquiry Received Successfully!</strong> Thank you for your inquiry. Our engineering team reviews submitted specifications and drawings and responds as quickly as possible. If you have confidential CAD files or drawings, you may also email them directly to <strong>sales@jimei-materials.com</strong>."
        );
        rfqForm.reset();
        rfqForm.classList.remove("was-validated");

        // Fire GA4 Conversion Key Event
        if (typeof gtag === "function") {
          gtag("event", "generate_lead", {
            event_category: "RFQ",
            event_label: subjectPrefix,
            value: 1,
            currency: "USD",
            technology: tech,
            source_page: pagePath
          });
          gtag("event", "rfq_submit", {
            technology: tech,
            source_page: pagePath
          });
        }
      } else {
        const msg = result.message || "Failed to transmit inquiry.";
        if (msg.toLowerCase().includes("access key") || msg.toLowerCase().includes("invalid")) {
          showAlert(
            alertContainer,
            "warning",
            "<strong>Notice:</strong> Submission service is currently processing in standby mode. Your entered specifications have been preserved. Please email your details directly to <strong>sales@jimei-materials.com</strong> for immediate review."
          );
        } else {
          showAlert(alertContainer, "danger", `<strong>Submission Error:</strong> ${msg}. Your entered parameters have been preserved.`);
        }
      }
    } catch (err) {
      console.error("Submission error:", err);
      showAlert(
        alertContainer,
        "danger",
        "<strong>Network Communication Notice:</strong> Unable to connect to the form processor. Your specifications have been preserved. Please copy and email your request directly to <strong>sales@jimei-materials.com</strong> or call <strong>+86-147-4537-3293</strong>."
      );
    } finally {
      submitBtn.disabled = false;
      submitBtn.innerHTML = originalBtnText;
    }
  });

  function appendHiddenField(form, name, value) {
    if (!value) return;
    let input = form.querySelector(`input[name="${name}"]`);
    if (!input) {
      input = document.createElement("input");
      input.type = "hidden";
      input.name = name;
      form.appendChild(input);
    }
    input.value = value;
  }

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
