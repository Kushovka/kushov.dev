import React from "react";

const ContactForm = () => {
  return (
    <div className="flex-center">
      <form className="w-full text-[#a7a7a7] flex flex-col gap-7" action="https://formsubmit.co/kushovk2003@mail.ru" method="POST">
        {/* name */}
        <div>
          <label htmlFor="name" className="label_contact">
            Name
          </label>
          <input
            type="text"
            placeholder="( Example ) Kirill"
            id="name"
            name="name"
            className="input_contact"
          />
        </div>
        {/* email */}
        <div>
          <label htmlFor="email" className="label_contact">
            Email address
          </label>
          <input
            type="text"
            placeholder="( Example ) Kushov@gmail.com"
            id="email"
            name="email"
            className="input_contact"
          />
        </div>
        {/* message */}
        <div>
          <label htmlFor="text" className="label_contact">
            Message
          </label>
          <textarea
            type="text"
            placeholder="Enter your message"
            id="text"
            name="message"
            rows={"5"}
            className="input_contact"
          />
        </div>

        <button
          type="submit"
          className="w-full py-4 md:text-2xl bg-blue-50 text-white-50 font-medium rounded-md hover:bg-blue-600 cursor-pointer transition-colors duration-300"
        >
          Send message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
