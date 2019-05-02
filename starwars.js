// Seu javascript aqui :)
// Use a Star Wars API: https://swapi.co/
// para fazer uma requisição assíncrona e:
//  - Pegar a lista de filmes (AJAX) e preencher no HTML
//  - Quando um filme for clicado, exibir sua introdução


$(document).ready(() => {
	let episode = localStorage.getItem('episode');
	if(episode)
		setIntro(episode);
});

const setIntro = text => {
	localStorage.setItem('episode', text);
	$('.reading-animation').html(text);
}

$.ajax({
	url:'/https://swapi.co/api/films/',

	success: function(resposta){
		let $Lista_films= $("#movies").find("ul");
		$Lista_films.find("li").remove();

		for (let i=0; i < resposta.results[i].episode_id;i++){
			let eps = resposta.result[i].episode_id;

			let titulo = "Episode" + eps;

			let elemento = '<li data-episode-url" ' + resposta.results[i].url+'">'+titulo +'</li>';


			$Lista_films.append(elemento);
		}
	}
});

$("movies ul").on('click','li',function(e){
	let url = $(e.target).data('episode-url');

	$.ajax({
			url: url,
			success: response => {
				let episode = episodeNumbers
			(response.episode_id);
				let text = 'Episode' + episode + '\n' + response.title +'\n\n'+ resposta.opening_crawl;
				setIntro(text);
			}
	})
});