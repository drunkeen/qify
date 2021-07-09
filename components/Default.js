import Head from "next/head";
import styles from "../styles/Home.module.css";

import { Header } from "./Header";
import { Title } from "./Title";

import { Footer } from "./Footer";
import { Component } from "react";
import { title } from "../src/config";

export class Default extends Component {
  render() {
    const props = this.props;

    const displayHeader = typeof props.header === "undefined" || props.header;
    const displayTitle = typeof props.title === "undefined" || props.title;
    const displayFooter = typeof props.footer === "undefined" || props.footer;

    const name = props.name || title;

    const moreStyles = props.styles || {};
    const moreClassnames = props.classname || "";

    return (
      <>
        <div className={styles.container}>
          <Head>
            <title>{name}</title>
            <link rel="icon" href="/partify/partify.svg" />
          </Head>

          {displayHeader && <Header />}

          <main
            className={`${styles.main} ${moreClassnames}`}
            style={moreStyles}
          >
            {displayTitle && <Title />}
            {props.children}
          </main>

          {displayFooter && <Footer />}
        </div>
      </>
    );
  }
}
