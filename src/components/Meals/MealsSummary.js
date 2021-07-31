import classes from './MealsSummary.module.css';

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>Selamat Datang di Faisal Restaurant</h2>
      <p>
        Silahkan pilih menu yang akan dipesan
      </p>
      <p>
        Semua Bahan Yang digunakan adalah kualitas terbaik dan tanpa bahan pengawet.
      </p>
    </section>
  );
};

export default MealsSummary;
