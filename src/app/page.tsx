"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { auth, provider } from "../app/index";
import { onAuthStateChanged, signOut } from "firebase/auth";
import Page from "./Navbar/page";
export interface userProps {
  displayName: string | null;
  email: string | null;
  photoURL: string | null;
}
export default function Home() {
  const [userData, setUserData] = useState<userProps | null>(null);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUserData(currentUser);
    });

    return () => unsubscribe();
  }, []);
  const snippet = `
<div id="testimonial-widget"></div>
<script>
  (function() {
    fetch('https://your-backend.com/api/testimonials')
      .then(response => response.json())
      .then(data => {
        const widget = document.getElementById('testimonial-widget');
        data.forEach(testimonial => {
          const div = document.createElement('div');
          div.innerHTML = \`
            <p>\${testimonial.message}</p>
            <small>-\${testimonial.name}</small>
          \`;
          widget.appendChild(div);
        });
      });
  })();
</script>
`;
  return (
    <>
      <Page userValues={userData} />
    </>
  );
}
