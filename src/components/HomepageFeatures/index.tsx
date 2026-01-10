import type { ReactNode } from "react";
import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  Png?: string;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: "重點書摘/旅行遊記",
    Png: require("@site/static/img/reading-icon.png").default,
    description: (
      <>
        精選職場、心理勵志、商業管理等好書重點摘要與深度解析。
        結合旅行見聞，分享不同文化視角下的人生智慧與成長體悟，
        讓每次閱讀都成為一場心靈之旅
      </>
    ),
  },
  {
    title: "職涯發展/個人成長",
    Png: require("@site/static/img/career-icon.png").default,
    description: (
      <>
        從職場新鮮人到資深工作者的成長軌跡分享。
        探討技能提升、領導力培養、時間管理與工作效率優化，
        幫助你在職涯路上走得更穩、更遠
      </>
    ),
  },
  {
    title: "電影心得/人生反思",
    Png: require("@site/static/img/movie-icon.png").default,
    description: (
      <>
        透過電影鏡頭觀察人性與社會，從故事情節中萃取人生哲理。
        分享觀影感悟、價值思辨與生命體驗， 用影像藝術啟發更深層的自我對話與成長
      </>
    ),
  },
];
function Feature({ title, Png, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <img src={Png} className={styles.featurePng} role="img" />
      </div>
      <br />
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
        <br />
      </div>
    </section>
  );
}
