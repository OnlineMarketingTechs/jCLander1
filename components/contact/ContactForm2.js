const ContactForm = () => {
    const formHTML = `<html lang='en_us'><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <style type="text/css">
    .newclassgreen {
    }
    </style>
    </head><body><style type="text/css"><!--
    form#WebToLeadForm, form#WebToLeadForm * {margin: 0; padding: 0; border: none; color: #333; font-size: 12px; line-height: 1.6em; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;}
    form#WebToLeadForm {float: left; border: 1px solid #ccc; margin: 10px;}
    form#WebToLeadForm h1 {font-size: 32px; font-weight: bold; background-color: rgb(60, 141, 188); color: rgb(247, 247, 247); padding: 10px 20px;}
    form#WebToLeadForm h2 {font-size: 24px; font-weight: bold; background-color: rgb(60, 141, 188); color: rgb(247, 247, 247); padding: 10px 20px;}
    form#WebToLeadForm h3 {font-size: 12px; font-weight: bold; padding: 10px 20px;}
    form#WebToLeadForm h4 {font-size: 10px; font-weight: bold; padding: 10px 20px;}
    form#WebToLeadForm h5 {font-size: 8px; font-weight: bold; padding: 10px 20px;}
    form#WebToLeadForm h6 {font-size: 6px; font-weight: bold; padding: 10px 20px;}
    form#WebToLeadForm p {padding: 10px 20px;}
    form#WebToLeadForm input,
    form#WebToLeadForm select,
    form#WebToLeadForm textarea {border: 1px solid #ccc; display: block;  width: 100%;  padding: 5px;}
    form#WebToLeadForm select {background-color: white;}
    form#WebToLeadForm input[type="button"],
    form#WebToLeadForm input[type="submit"] {display: inline; float: none; padding: 5px 10px; width: auto; min-width: auto;}
    form#WebToLeadForm input[type="checkbox"],
    form#WebToLeadForm input[type="radio"] {width: 18px; min-width: auto;}
    form#WebToLeadForm div.col {display: block; float: left; width: 330px; padding: 10px 20px;}
    form#WebToLeadForm div.clear {display: block; float: none; clear: both; height: 0px; overflow: hidden;}
    form#WebToLeadForm div.center {text-align: center;}
    form#WebToLeadForm div.buttons {padding: 10px 0; border-top: 1px solid #ccc; background-color: #f7f7f7}
    form#WebToLeadForm label {display: block; float: left; width: 160px; font-weight: bold;}
    form#WebToLeadForm span.required {color: #FF0000;}
    --></style>
    <!-- TODO ???
    
    --><form id="WebToLeadForm" action="https://onlinemarketingapps.com/crm/public/index.php?entryPoint=WebToPersonCapture" method="POST" name="WebToLeadForm">
    <div class="row">
    <div class="col"><label>First Name: </label><input name="first_name" id="first_name" type="text" /></div>
    <div class="clear"> </div>
    </div>
    <div class="row">
    <div class="col"><label>Last Name: <span class="required">*</span></label><input name="last_name" id="last_name" type="text" required="" /></div>
    
    <div class="clear"> </div>
    </div>
    <div class="row">
    <div class="col"><label>Mobile: </label><input name="phone_mobile" id="phone_mobile" type="text" /></div>
    <div class="clear"> </div>
    </div>
    <div class="row">
    <div class="col"><label>Email Address: </label><input name="email1" id="email1" type="email" /></div>
    <div class="clear"> </div>
    </div>
    <div class="row">
    <div class="col"><label>Website: </label><input name="website" id="website" type="text" /></div>
    <div class="clear"> </div>
    </div>
    <div class="row">
    <div class="col">
        <input name="lead_source" id="lead_source" type="hidden" value="Web Site" />
    </div>
    <div class="clear"> </div>
    </div>
    <div class="row center buttons">
        <button class="theme-btn btn-style-one mb-30 contactbump" name="Submit" type="submit" value="Submit"  /><span class="btn-title-new">Let's Get Started</span></button>
    <div class="clear"> </div>
    </div>
    <input name="campaign_id" id="campaign_id" type="hidden" value="8e8c55a1-6f2b-0953-8614-6626948e137a" /> 
        <input name="redirect_url" id="redirect_url" type="hidden" value="http://onlinemarketingtechs.com/thankyou" /> 
        <input name="assigned_user_id" id="assigned_user_id" type="hidden" value="1" /> 
        <input name="moduleDir" id="moduleDir" type="hidden" value="Leads" /></form>
    <p>
      <!--[CDATA[
        function submit_form() {
            if (typeof(validateCaptchaAndSubmit) != 'undefined') {
                validateCaptchaAndSubmit();
            } else {
                check_webtolead_fields();
                //document.WebToLeadForm.submit();
            }
        }
    
        function check_webtolead_fields() {
            if (document.getElementById('bool_id') != null) {
                var reqs = document.getElementById('bool_id').value;
                bools = reqs.substring(0, reqs.lastIndexOf(';'));
                var bool_fields = new Array();
                var bool_fields = bools.split(';');
                nbr_fields = bool_fields.length;
                for (var i = 0; i < nbr_fields; i++) {
                    if (document.getElementById(bool_fields[i]).value == 'on') {
                        document.getElementById(bool_fields[i]).value = 1;
                    } else {
                        document.getElementById(bool_fields[i]).value = 0;
                    }
                }
            }
        }
    // ]]-->
    &nbsp; </p>
    </body></html>
    `; 
    return <div dangerouslySetInnerHTML={{ __html: formHTML }} />;
  };
  
  export default ContactForm;