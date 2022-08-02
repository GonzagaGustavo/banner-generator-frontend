import React, { useEffect } from "react";
import "./Banner.css";
import { HiArrowNarrowDown, HiArrowNarrowLeft, HiArrowNarrowRight, HiArrowNarrowUp } from "react-icons/hi"


function Banner({ selectedFile, url, loading, setPosition, position, attBanner }) {
useEffect(() => {
  attBanner()
}, [position])

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div style={{width: "20%", height: "20%"}}>
          <p className="MudarTextoImagem">Mudar imagem</p>

          <button className="mudarTextoImagem" onClick={() => setPosition({
            topImg: position.topImg,
            leftImg: position.leftImg -10,
            topText:position.topText,
            leftText:position.leftText
          })}><HiArrowNarrowLeft/></button>

          <button className="mudarTextoImagem"  onClick={() => setPosition({
            topImg: position.topImg -10,
            leftImg: position.leftImg,
            topText:position.topText,
            leftText:position.leftText
          })} ><HiArrowNarrowUp/></button>

          <button className="mudarTextoImagem" onClick={() => setPosition({
            topImg: position.topImg +10,
            leftImg: position.leftImg ,
            topText:position.topText,
            leftText:position.leftText
          })} ><HiArrowNarrowDown/></button>

          <button className="mudarTextoImagem"  onClick={() => setPosition({
            topImg: position.topImg,
            leftImg: position.leftImg +10,
            topText:position.topText,
            leftText:position.leftText
          })}><HiArrowNarrowRight/></button>

        </div>
        <div style={{width: "20%", height: "20%"}}>
          <p className="MudarTextoImagem">Mudar texto</p>
          <button className="mudarTextoImagem" onClick={() => setPosition({
            topImg: position.topImg,
            leftImg: position.leftImg,
            topText:position.topText,
            leftText:position.leftText -10
          })} ><HiArrowNarrowLeft /></button>

          <button className="mudarTextoImagem" onClick={() => setPosition({
            topImg: position.topImg,
            leftImg: position.leftImg,
            topText:position.topText -10,
            leftText:position.leftText
          })}><HiArrowNarrowUp /></button>

          <button className="mudarTextoImagem" onClick={() => setPosition({
            topImg: position.topImg,
            leftImg: position.leftImg,
            topText:position.topText +10,
            leftText:position.leftText 
          })}><HiArrowNarrowDown/></button>

          <button className="mudarTextoImagem" onClick={() => setPosition({
            topImg: position.topImg,
            leftImg: position.leftImg,
            topText:position.topText,
            leftText:position.leftText +10
          })}><HiArrowNarrowRight /></button>
          
        </div>
      </div>
      <div className="banner">
        {selectedFile ? (
          <>
            {url ? (
              <>
                <div>
                  <img className="preview" src={url} alt="" />
                </div>
              </>
            ) : (
              <p>Aguarde...</p>
            )}
          </>
        ) : (
          <div>{loading}%</div>
        )}
      </div>
    </div>
  );
}

export default Banner;
