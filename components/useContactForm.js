'use client';
import { useCallback, useRef, useState } from 'react';

/* Posts to the PHP handler that ships with the site (public/contact.php),
   which mails the enquiry to the Hostinger mailbox in CONTACT_TO.
   Set NEXT_PUBLIC_FORM_ENDPOINT to use a hosted form service instead. */
const ENDPOINT = process.env.NEXT_PUBLIC_FORM_ENDPOINT || '/contact.php';
const MAILBOX = 'hello@uxvel.com';

export default function useContactForm() {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const companyRef = useRef(null);
  const briefRef = useRef(null);
  const [formNote, setFormNote] = useState('');

  const sendBrief = useCallback(async () => {
    const val = (r) => (r.current && r.current.value ? r.current.value.trim() : '');
    const payload = { name: val(nameRef), email: val(emailRef), company: val(companyRef), brief: val(briefRef) };

    if (!payload.email || payload.email.indexOf('@') < 1) {
      setFormNote('Add an email address so we can reply.');
      if (emailRef.current) emailRef.current.focus();
      return;
    }
    setFormNote('Sending…');
    try {
      const res = await fetch(ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error('bad status ' + res.status);
      setFormNote('Thank you — the brief is with us. We reply within one working day.');
      [nameRef, emailRef, companyRef, briefRef].forEach((r) => { if (r.current) r.current.value = ''; });
    } catch (err) {
      const subject = 'New project enquiry' + (payload.company ? ' — ' + payload.company : '');
      const body = ['Name: ' + (payload.name || '—'), 'Email: ' + payload.email, 'Company: ' + (payload.company || '—'), '', payload.brief].join('\n');
      setFormNote('Opening your email app instead — or write to ' + MAILBOX + '.');
      window.location.href = 'mailto:' + MAILBOX + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
    }
  }, []);

  return { nameRef, emailRef, companyRef, briefRef, sendBrief, formNote };
}
