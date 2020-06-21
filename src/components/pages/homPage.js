import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import { fetchData,loader } from '../../actions/action'

const Hompage = (props) => {
    useEffect(() => {}, [])

    const test = async() => {
      props.loader('start')
       await props.fetchData('/fetch')
      props.loader('stop')
    }
    console.log(props.myloader);
    
    if (props.myloader) {
        return <h3>Loading...</h3>
    }
    return (

        <div >
            <p onClick={test}>Homepage</p>
            {props.magazine.goods && props
                .magazine
                .goods
                .map(item => {
                    return <h2 key={item.title} onClick={test}>{item.title}</h2>
                })}
        </div>
    )
}
const mapStateToProps = state => {
    return {
        magazine: state.reduser,
        myloader:state.reduser.loader
    }
}
const mapDispatchToProps = {
    loader ,
    fetchData
}

export default connect(mapStateToProps, mapDispatchToProps)(Hompage)