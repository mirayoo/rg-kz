import React from "react";
import { Link } from "react-router-dom";
import '../index.css';

function ListItem(props) {

  function selectItem(){
    let key = String(props.qkey)
    let value = String(props.akey)
    localStorage.setItem(key,value)
  }

  return (
    <div onClick={()=>selectItem()}>
      <Link className={"list-item-inner"} to={props.navLink}>
        <picture>
          <source media="(max-width:767px)" srcSet={props.titleMob}/>
          <img className="list-item-title" src={props.title} alt="" />
        </picture>
        { props.subTitle && props.subTitleMob && (
          <picture>
            <source media="(max-width:767px)" srcSet={props.subTitleMob}/>
            <img className="list-item-subtitle" src={props.subTitle} alt="" />
          </picture>
        )}
        { props.imageUrl && (
        <img className="list-item-img" src={props.imageUrl} alt="" />
        )}
      </Link>
      </div>
  );
}

export default ListItem;
