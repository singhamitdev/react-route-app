import { useEffect } from "react";
import { Link, useFetcher } from "react-router-dom";
import classes from "./NewsLetterSignup.module.css";

function NewsletterSignup() {
  const fetcher = useFetcher();
  const { data, state } = fetcher;
  useEffect(() => {
    if (state === "idle" && data && data.message) {
      window.alert(data.message);
    }
  }, [data, state]);
  return (
    <>
      <fetcher.Form
        method="post"
        action="/newsletter"
        className={classes.newsletter}
      >
        <input
          type="email"
          placeholder="Sign up for newsletter..."
          aria-label="Sign up for newsletter"
        />
        <button>Sign up</button>
      </fetcher.Form>
      <p style={{ textAlign: "center" }}>
        <Link to=".." relative="path">
          Back
        </Link>
      </p>
    </>
  );
}

export default NewsletterSignup;
