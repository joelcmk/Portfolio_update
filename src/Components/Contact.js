import { useEffect, useState } from 'react';
import { send } from 'emailjs-com';

function Email() {
  const [toSend, setToSend] = useState({
    message: '',
    reply_to: '',
  });

  const [submit, setSubmit] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    setSubmit(true);
    send('service_u0k5uad', 'template_tbwnqvj', toSend, 'c9pzgYzR3cO11Zwyr')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
      })
      .catch((err) => {
        console.log('FAILED...', err);
      });
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <h3 className="text-center mt-20 font-bold text-4xl">Get in touch!</h3>
      {!submit ? (
        <form
          className="max-w-lg my-0 p-3 mx-auto bg-transparent border-4 rounded-xl mt-5 shadow-md"
          onSubmit={onSubmit}
        >
          <div className="my-0 mx-auto w-full">
            <label class="block">
              <span class="block text-sm text-lg text-slate-700">Email:</span>
              <input
                type="email"
                name="reply_to"
                className="w-full pl-3 h-10 border-2 rounded-md peer ..."
                placeholder="you@email.com"
                value={toSend.reply_to}
                onChange={handleChange}
              />
              <p class="mt-2 invisible peer-invalid:visible text-blue-500 text-md">
                Please provide a valid email address.
              </p>
            </label>

            <label className="block text-lg text-slate-700">
              Your message:
            </label>
            <textarea
              type="text"
              name="message"
              className="w-full p-1 h-40 rounded-md mb-3 text-right text-start border-2"
              value={toSend.message}
              onChange={handleChange}
            />
            <button
              className="px-6 py-2 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      ) : (
        <div className="max-w-lg my-0 p-3 mx-auto bg-purple-300 rounded-xl text-center py-10 text-white text-xl mt-5">
          Thank for reaching out! I'll answer you very soon!
        </div>
      )}
    </div>
  );
}

export default Email;
