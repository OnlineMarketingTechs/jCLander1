const ContactForm = () => {
    const formHTML = `<html lang='en_us'><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8"></head><body><style type="text/css"><!--
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
    form#WebToLeadForm textarea {border: 1px solid #ccc; display: block; float: left; min-width: 170px; padding: 5px;}
    form#WebToLeadForm select {background-color: white;}
    form#WebToLeadForm input[type="button"],
    
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
    
    -->
    
    <form id="WebToLeadForm" action="https://onlinemarketingapps.com/crm/public/index.php?entryPoint=WebToPersonCapture" method="POST" name="WebToLeadForm">
    <div class="row"><div class="col"> 
    <div class="form-group">
            <label>First Name: <span class="required">*</span></label>
            <input class="form-control" name="first_name" id="first_name" type="text" /></div>
    </div>
    <div class="clear"> </div>
    </div>
    <div class="row">
    <div class="col">
    <div class="form-group"><label>Last Name: <span class="required">*</span></label>
    <input class="form-control" name="last_name" id="last_name" type="text" required="" /></div>
     </div>
    <div class="clear"> </div>
    </div>
    <div class="row">
    <div class="col">
    <div class="form-group"><label>Mobile: </label>
    <input class="form-control" name="phone_mobile" id="phone_mobile" type="text" /></div>
     </div>
    <div class="clear"> </div>
    </div>
    <div class="row">
    <div class="col"> 
    <div class="form-group"><label>Email Address: </label>
    <input class="form-control" name="email1" id="email1" type="email" /></div>
    </div>
    <div class="clear"> </div>
    </div>
    <div class="row">
    <div class="col">
    <div class="form-group"><label>Website: </label>
    <input class="form-control" name="website" id="website" type="text" /></div>
     </div>
    <div class="clear"> </div>
    </div>
    <div class="row">
    <div class="col">
    <p><b>How can we help you today?</b> Please enter your message, comment, or concern.</p>
    <div class="form-group"><label></label><br />
   <textarea name="description" id="description" placeholder="How can we help you today?"   /> </textarea></div>
 </div>
<div class="clear"> </div>
</div>
    <div class="row">
    <div class="col">
    <input type="hidden" name="lead_source" value="Web Site"></input>
    </div>
    <div class="col"> </div>
    <div class="clear"> </div>
    </div>
    <div class="row center buttons">
    <button class="theme-btn btn-style-one mb-30 contactbump" name="Submit" type="submit" value="Submit"  /><span class="btn-title-new">SEND MESSAGE</span></button>
    <div class="clear"> </div>
    </div>
    <input name="campaign_id" id="campaign_id" type="hidden" value="2c34572f-ec02-9f9e-51b2-663e5e0426db" /> <input name="redirect_url" id="redirect_url" type="hidden" value="http://onlinemarketingtechs.com/thankyou.com" /> <input name="assigned_user_id" id="assigned_user_id" type="hidden" value="1" /> <input name="moduleDir" id="moduleDir" type="hidden" value="Leads" /></form>
    <p>
<![CDATA[
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
]]>
    </p></body></html>`; 
    return <div dangerouslySetInnerHTML={{ __html: formHTML }} />;
  };
  
  export default ContactForm;