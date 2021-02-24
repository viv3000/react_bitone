import NavBar from './NavBar/NavBar.js'
import Content from './Content/Content.js'
import c from './Article.module.css'

const Article = () => {
	return (
		<div className={c.Article}>
			<div className={c.NavBarBox}><NavBar /></div>
			<div className={c.ContentBox}><Content /></div>
		</div>
	);
}

export default Article;
