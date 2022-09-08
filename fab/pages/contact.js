import Head from 'next/head'
import styles from '../styles/Machine.module.css'

export default function Contact() {
  return (
    <div>
        <Head>
            <title>контакты - фихтех.фабрика</title>
            <meta name="description" content="Физтех.Фабрика" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        
        <div className={styles.faq_container}>
          <div className={styles.faq_intro}>
            <div className={styles.contacts_title}>физтех.фабрика</div>
            <div className={styles.machine_meta}>
              <table>
                <tbody>
                <tr>
                  <td>Адрес:</td>
                  <td>г. Долгопрудный, ул. Мейкерская, дом 1</td>
                </tr>
                <tr>
                  <td>Телефон:</td>
                  <td> +7 495 032 01 77</td>
                </tr>
                <tr>
                  <td>Email:</td>
                  <td>fabrika@edu.mipt.ru</td>
                </tr>
                <tr>
                  <td>Режим работы:</td>
                  <td>пн, ср, пт с 11 до 19</td>
                </tr>
                </tbody>
              </table>
            </div> 


            <div>
              <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Abf019370c64868067f356387522aa266b591cb7ef7d39ef8dcb078891bb3ec38&amp;source=constructor" width="100%" height="400" frameBorder="0"></iframe>
            </div>

          </div>
        </div>
    </div>
  )
}