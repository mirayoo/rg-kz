import React from "react";
import { Link } from "react-router-dom";
import '../index.css';

function ListItem(props) {

  return (
      <Link to={props.navLink}>
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
  );
}

export default ListItem;
