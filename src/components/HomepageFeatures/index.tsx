import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";
import Link from "@docusaurus/Link";

type FeatureItem = {
  title: string;
  href?: string | undefined;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: "HoloCure",
    href: "/img/holocure_logo.png",
    description: (
      <>
        The wiki's namesake—a Vampire Survivors-inspired, Hololive-themed
        fangame.
        <br />
        <Link
          className={clsx(
            "button button--secondary button--lg",
            styles.featureButton
          )}
          to="/docs/games/holocure"
        >
          View on Wiki
        </Link>
      </>
    ),
  },
  {
    title: "Free & Open-Source",
    description: (
      <>
        This wiki is completely free and open-source—save for copyrighted
        HoloCure assets.
        <br />
        <a
          className={clsx(
            "button button--secondary button--lg",
            styles.featureButton
          )}
          href="https://github.com/hcdotnet/holocure-wiki"
        >
          View Repository
        </a>
      </>
    ),
  },
  {
    title: "Detailed Technical Documentation",
    description: (
      <>
        This wiki is not limited to practical knowledge. Technical documentation
        regarding the inner-workings of HoloCure are also documented!
        <br />
        <Link
          className={clsx(
            "button button--secondary button--lg",
            styles.featureButton
          )}
          to="/docs/games/holocure/technical"
        >
          View More
        </Link>
      </>
    ),
  },
];

function Feature({ title, href, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4", styles.featureItem)}>
      <div className="text--center">
        {href ? (
          <img src={href} alt={title} className={styles.featureImg} />
        ) : (
          <img className={styles.featureImg} />
        )}
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
