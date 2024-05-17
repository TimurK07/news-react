import styles from "./styles.module.css";

interface Props {
    image: string;
}

const Image = ({ image }: Props) => {
return (
    <div className={styles.wrapper}>
        {image ? <img src={image} alt='news image' className={styles.image}/> : null}
    </div>
);
};

export default Image;
