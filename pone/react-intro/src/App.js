import c from './App.module.css';
import Logo from './bit.png';
import Header from './Header/Header.js'
import Article from './Article/Article.js'


const MainApp = () => {
  return (
    <div className={c.Main}>
		<header className={c.Header}><Header /></header>
		<div className={c.Article}><Article /></div>
		<img className={c.img} src='Logo' />
    </div>
  );
}


export default MainApp;
