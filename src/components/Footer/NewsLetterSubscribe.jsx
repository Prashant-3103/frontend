import MailchimpSubscribe from 'react-mailchimp-subscribe';

import NewsletterForm from './NewsLetterForm';
const NewsletterSubscribe = () => {

  const MAILCHIMP_URL = "https://gmail.us10.list-manage.com/subscribe/post?u=0a7bc285d7c57fe1b405a536c&amp;id=e911720317&amp;f_id=0010d3e5f0"

  return (
    <MailchimpSubscribe
      url={ MAILCHIMP_URL}
      render={ ( props ) => {
        const { subscribe, status, message } = props || {};
        return (
          <NewsletterForm
            status={ status }
            message={ message }
            onValidated={ formData => subscribe( formData ) }
          />
        );
      } }
    />
  );
};

export default NewsletterSubscribe;
