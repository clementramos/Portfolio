import React from "react";

export default function Tests() {
  return (
    <section className="bg-white dark:bg-gray-800 h-full">
      <div className="max-w-6xl mx-auto h-48 bg-white dark:bg-gray-800">
        <h1 className=" text-5xl md:text-9xl font-bold py-20 text-center md:text-left">
          Tests
        </h1>
      </div>
      {/* Grid starts here */}
      <div className="bg-[#F1F1F1] dark:bg-gray-900">
        <div className="max-w-6xl mx-auto py-20 pb-40">
          <p className="pb-1 underline">L'encadré en noir : une grid de 2 colonnes avec un gap <code>"grid grid-cols-2 gap-8"</code>.</p>
          <p className="pb-2 text-red-500"><p className="underline">Les deux encadrés en rouge : </p>Les deux <code>div</code> représentant les deux colonnes avec les "id" <code>gauche et droite</code>.<br></br> Dans la <code>div</code> avec <code>id="droite"</code>, tu verras que je la divise en deux lignes : <code>grid grid-rows-2 gap-8</code></p>
          <p className="pb-2 text-green-500"><p className="underline">Les deux encadrés en vert :</p> Les deux <code>div</code> représentant les deux lignes avec les "id" <code>haut et bas</code> pour mettre tes images superposées.</p>
          <p className="pb-4 italic">Mainteant, à toi de faire en sorte que les images se superposent quand tu es sur mobile... Mais pour t'aider, il faut que tu fasses une colonne avec un gap pour les différencier, et qu'à tout ça tu ajoutes 3 lignes. Bon courage mademoiselle ❤️</p>
          <div className="border-4 border-black grid grid-cols-2 gap-8 content-stretch">
            <div id="gauche" className="border-4 border-red-500 w-full h-[70vh] text-center">
              Image de gauche <br></br>
            </div>
            <div id="droite" className="border-4 border-red-500 w-full text-center grid grid-row-2 gap-8 border mx-auto">
              <div id="haut" className="border-2 border-green-500">Haut</div>
              <div id="bas" className="border-2 border-green-500">Bas</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const ProjectCard = ({ title, link, imgUrl, number }) => {
  return (
    <a href={link} className="w-full block shadow-2xl">
      <div className="relative overflow-hidden">
        <div className="h-72 object-cover">
          <img
            src={imgUrl}
            alt="portfolio"
            className="transform hover:scale-125 transition duration-2000 ease-out object-cover h-full w-full"
          />
        </div>
        <h1 className="absolute top-10 left-10 text-gray-50 font-bold text-xl bg-green-500 rounded-md px-2">
          {title}
        </h1>
        <h1 className="absolute bottom-10 left-10 text-gray-50 font-bold text-xl ">
          {number.length === 1 ? "0" + number : number}
        </h1>
      </div>
    </a>
  );
};
