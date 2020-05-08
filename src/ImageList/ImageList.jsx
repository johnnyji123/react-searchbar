import React, {Component} from "react";
import styles from "./ImageList.module.scss";
class ImageList extends Component{

    
    render(){
         const images = this.props.images.map((image) => {
            return <img key = {image.id} img src = {image.urls.regular} />
        });
        return(
            <div className ={styles.imageList}>{images}</div>
        )
       
    }
}

export default ImageList;