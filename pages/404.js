import { Link } from "contentful";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function NotFound() {
  useEffect(() => {
    setTimeout(() => {
      const router = useRouter();
      router.push("/");
    }, 3000);
  }, []);

  return (
    <div className="not-found">
      <h1>404</h1>
      <h2>Oooops! That page coannot be found :(</h2>
      <p>
        Redirecting to the <link href="/">Home</link> for more marmite
        goodness...
      </p>

      <style jsx>
        {`
          .not-found {
          background: #fff;
          padding: 30px;
          box-shadow: 1px 3px 5px rgba(0,0,0,0.1);
          transform: rotateZ(-1deg);
        }
        h1 {
          font-size: 3em;
          `}
      </style>
    </div>
  );
}
