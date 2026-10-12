const whatsapp=document.querySelector('#send-whatsapp'),snapchat=document.querySelector('#send-snapchat');
function readyMessage(){return enquiry.replace('INKSUBWAY ENQUIRY PREVIEW — NOT SENT','Hi Stephanie, I’d like to enquire about a tattoo with INKSUBWAY.').replace('No appointment has been booked. Availability, pricing and next steps must be agreed directly with Stephanie.','Please let me know availability, pricing and next steps.');}
form.addEventListener('submit',()=>{if(step===2)whatsapp.href='https://wa.me/2349017987184?text='+encodeURIComponent(readyMessage())});
snapchat.addEventListener('click',async()=>{try{await navigator.clipboard.writeText(readyMessage());document.querySelector('#copy-status').textContent='Enquiry copied. Paste it into your Snapchat message to Stephanie.'}catch{document.querySelector('#copy-enquiry').click();document.querySelector('#copy-status').textContent='Use Copy enquiry, then paste it into your Snapchat message.'}});

