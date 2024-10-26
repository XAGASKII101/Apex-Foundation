const btn = document.getElementById('button');

document.getElementById('form')
  .addEventListener('submit', function (event) {
    event.preventDefault();

    btn.value = 'Please Wait...';

    const serviceID = 'service_t4vlw1p';
    const templateID = 'template_ckjodeh';

    emailjs.sendForm(serviceID, templateID, this)
      .then(() => {
        alert('Message Sent Successfully!');
        window.location.href = 'index.html';
      }, (err) => {
        btn.value = 'Send';
        alert(JSON.stringify(err));
      });
  });

btn.addEventListener('click', function () {
  alert('Button clicked!');
});

const btn = document.getElementById('button');

btn.addEventListener('click', function () {
  // Submit the form
  document.getElementById('form').submit();
});

document.getElementById('form')
  .addEventListener('submit', function (event) {
    event.preventDefault();

    btn.value = 'Please Wait...';

    const serviceID = 'service_t4vlw1p';
    const templateID = 'template_ckjodeh';

    emailjs.sendForm(serviceID, templateID, this)
      .then(() => {
        alert('Message Sent Successfully!');
        window.location.href = 'index.html';
      }, (err) => {
        btn.value = 'Send';
        alert(JSON.stringify(err));
      });

const btn = document.getElementById('button');

btn.addEventListener('click', function () {
  // Submit the form
  document.getElementById('form').submit();

  // Send email
  var recipient = "xaga849@gmail.com";
  var subject = "Message from Website";
  var body = "Name: " + document.getElementById('name').value + "\nEmail: " + document.getElementById('email').value + "\nMessage: " + document.getElementById('message').value;
  var mailto = "mailto:" + recipient + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
  window.open(mailto);
});

document.getElementById('form')
  .addEventListener('submit', function (event) {
    event.preventDefault();

    btn.value = 'Please Wait...';

    const serviceID = 'service_t4vlw1p';
    const templateID = 'template_ckjodeh';

    emailjs.sendForm(serviceID, templateID, this)
      .then(() => {
        alert('Message Sent Successfully!');
        window.location.href = 'index.html';
      }, (err) => {
        btn.value = 'Send';
        alert(JSON.stringify(err));
      });
  });
