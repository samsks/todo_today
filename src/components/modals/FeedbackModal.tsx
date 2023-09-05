import Cookies from "js-cookie";
import styles from "./FeedbackModal.module.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";

interface ModalProps {
  setIsOpenProjectModal: React.Dispatch<React.SetStateAction<boolean>>;
  linksClicked: { github: boolean; linkedin: boolean };
  setLinksClicked: React.Dispatch<
    React.SetStateAction<{ github: boolean; linkedin: boolean }>
  >;
}

export function FeedbackModal({
  setIsOpenProjectModal,
  linksClicked,
  setLinksClicked,
}: ModalProps) {
  const handleLinkClick = (platform: string) => {
    setLinksClicked((prevState) => ({
      ...prevState,
      [platform]: true,
    }));
  };

  const handleCloseModal = (timer: number) => {
    const expirationDate = new Date();
    expirationDate.setDate(expirationDate.getDate() + 7);

    Cookies.set("modalReminder", timer.toString(), { expires: expirationDate });
    setIsOpenProjectModal(false);
  };

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <div className={styles.modalHeader}>
          <img
            src="https://media.licdn.com/dms/image/D4D03AQEvteIXwNqYtA/profile-displayphoto-shrink_200_200/0/1673893454596?e=1699488000&v=beta&t=RCgFuwO7LquauJ4t-FGeXC9lrmdh6ddH7SOzohCsBDs"
            alt="imagem de profile do linkedin"
          />
          <div>
            <h3>Olá! 😊 Eu sou o Samuel.</h3>
          </div>
        </div>

        <div className={styles.modalBody}>
          <h5>
            Gostou do projeto? Ajude compartilhando e tornando-o melhor! 🚀
          </h5>
          <section>
            <span>Veja o repositório deste projeto:</span>
            <a
              href="https://github.com/samsks/todo_myday"
              target="_blank"
              onClick={() => handleLinkClick("github")}
            >
              <FaGithub className={styles.githubLink} />
              <span className={styles.tooltip}>
                Não esqueça de clicar na estrela! 🌟
              </span>
            </a>
          </section>
          <section>
            <span>Vamos nos conectar? 😄</span>
            <a
              href="https://www.linkedin.com/in/sammvieira/"
              target="_blank"
              onClick={() => handleLinkClick("linkedin")}
            >
              <FaLinkedin className={styles.linkedInLink} />
              <span className={styles.tooltip}>
                Compartilhei sobre este projeto, então fique à vontade para
                interagir e compartilhar suas ideias! 💬
              </span>
            </a>
          </section>
        </div>
        <div className={styles.modalFooter}>
          <button onClick={() => handleCloseModal(1 * 60 * 60 * 1000)}>
            Me lembre mais tarde ⏰
          </button>
        </div>
        <button
          disabled={!linksClicked.github || !linksClicked.linkedin}
          className={styles.modalCloseBtn}
          onClick={() => handleCloseModal(24 * 60 * 60 * 1000)}
        >
          x
        </button>
      </div>
    </div>
  );
}
