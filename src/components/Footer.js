import rulesImage from "../assets/images/image-rules.svg";
import createElement from "../utils/createElement";
import linkedInIcon from "../assets/images/logo--linkedin.svg";
import githubIcon from "../assets/images/logo--github.svg";

export default function Footer() {
  const footer = createElement("footer", "footer");
  const rulesContainer = createElement("div", "rulesContainer");
  const rules = createElement("div", "rules");
  const rulesHead = createElement("div", "rules__head");
  const rulesTitle = createElement("span", "rules__title");
  const rulesCloseButton = createElement("button", "rules__closeButton");
  const rulesImg = createElement("img", "rules__img");
  const openRulesbutton = createElement("button", "footer__openRulesbutton");

  const authorInfo = createElement("div", "footer__authorInfo");
  const authorName = createElement("p", "footer__author");
  const links = createElement("div", "footer__links");
  const linkedInLink = createElement("a", "footer__linkedIn");
  const githubLink = createElement("a", "footer__github");
  const linkedInImg = createElement("img", "footer__linkedInIcon");
  const githubImg = createElement("img", "footer__githubIcon");

  footer.setAttribute("data-testid", "footer");
  rulesContainer.setAttribute("data-testid", "rulesContainer");

  openRulesbutton.innerHTML = "RULES";
  rulesTitle.innerHTML = "RULES";
  rulesCloseButton.innerHTML = "X";
  rulesImg.src = rulesImage;

  authorName.innerHTML = "Create by - Jonas Reis";
  linkedInLink.href = "https://www.linkedin.com/in/jonas-fernandes-5b4681260/";
  linkedInLink.target = "_blank";
  linkedInImg.src = linkedInIcon;
  githubLink.href = "https://github.com/JonasFerReis";
  githubLink.target = "_blank";
  githubImg.src = githubIcon;

  openRulesbutton.addEventListener("click", () => {
    document.getElementById("root").appendChild(rulesContainer);
  });
  rulesCloseButton.addEventListener("click", () => {
    rulesContainer.remove();
  });

  rulesHead.appendChild(rulesTitle);
  rulesHead.appendChild(rulesCloseButton);
  rules.appendChild(rulesHead);
  rules.appendChild(rulesImg);
  rulesContainer.appendChild(rules);

  authorInfo.appendChild(authorName);
  linkedInLink.appendChild(linkedInImg);
  githubLink.appendChild(githubImg);
  links.appendChild(linkedInLink);
  links.appendChild(githubLink);
  authorInfo.appendChild(links);

  footer.appendChild(authorInfo);
  footer.appendChild(openRulesbutton);

  return footer;
}
