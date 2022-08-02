import React from "react";
import "./Banner.css";
import { HiArrowNarrowDown, HiArrowNarrowLeft, HiArrowNarrowRight, HiArrowNarrowUp } from "react-icons/hi"


function Banner({ selectedFile, url, loading, setPosition, position }) {
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div style={{width: "20%", height: "20%"}}>
          <p className="MudarTextoImagem">Mudar imagem</p>

          <button className="mudarTextoImagem" onClick={() => setPosition({
            topImg: position.topImg,
            leftImg: position.leftImg +1,
            topText:position.topText,
            leftText:position.leftText
          })}><HiArrowNarrowLeft/></button>

          <button className="mudarTextoImagem"  onClick={() => setPosition({
            topImg: position.topImg +1,
            leftImg: position.leftImg,
            topText:position.topText,
            leftText:position.leftText
          })} ><HiArrowNarrowUp/></button>

          <button className="mudarTextoImagem" onClick={() => setPosition({
            topImg: position.topImg -1,
            leftImg: position.leftImg ,
            topText:position.topText,
            leftText:position.leftText
          })} ><HiArrowNarrowDown/></button>

          <button className="mudarTextoImagem"  onClick={() => setPosition({
            topImg: position.topImg,
            leftImg: position.leftImg -1,
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
            leftText:position.leftText +1
          })} ><HiArrowNarrowLeft /></button>

          <button className="mudarTextoImagem" onClick={() => setPosition({
            topImg: position.topImg,
            leftImg: position.leftImg,
            topText:position.topText +1,
            leftText:position.leftText
          })}><HiArrowNarrowUp /></button>

          <button className="mudarTextoImagem" onClick={() => setPosition({
            topImg: position.topImg,
            leftImg: position.leftImg,
            topText:position.topText -1,
            leftText:position.leftText 
          })}><HiArrowNarrowDown/></button>

          <button className="mudarTextoImagem" onClick={() => setPosition({
            topImg: position.topImg,
            leftImg: position.leftImg,
            topText:position.topText,
            leftText:position.leftText -1
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
              <img
                className="preview"
                src={URL.createObjectURL(selectedFile[0])}
                alt=""
              />
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
