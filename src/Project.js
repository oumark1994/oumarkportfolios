import React from 'react'
import './project.css';
import Project1 from './img/code4.jpg'
import Project2 from './img/sneakers.PNG'
import Project3 from './img/foods.PNG'
import Project4 from './img/realstate.PNG'

const Project = () => {
    return (
        <div className='project component__space' id='Portfolio'>
                <div className='heading'>
                <h3 className='heading'>My Portfolio</h3>
                <p className='heading p__color'>Some of the projects i have work on and many more </p>
            </div>
            <div className='container'>
                <div className='row'>
                <div className='col__3' style={{height:'250px'}}>
                        <div className='project__box pointer relative'>
                            <div className='project__box__img pointer relative'>
                                <div className='project__img__box'>
                                    <img src={Project1} alt="" className='project__img '/>
                                </div>
                                <div className='mask__effect'></div>
                            </div>
                            <div className='project__meta absolute'>
                                <h5 className='project__text'>Chadotec</h5>
                                <a href='https://www.chadotec.com' className='project__btn'>Visit website</a>
                            </div>
                        </div>
                    </div>
                    <div className='col__3' style={{height:'250px'}}>
                        <div className='project__box pointer relative'>
                            <div className='project__box__img pointer relative'>
                                <div className='project__img__box'>
                                    <img src={Project3} alt="" className='project__img '/>
                                </div>
                                <div className='mask__effect'></div>
                            </div>
                            <div className='project__meta absolute'>
                                <h5 className='project__text'>Foods</h5>
                                <a href='https://www.myfoods.chadotec.com' className='project__btn'>Visit website</a>
                            </div>
                        </div>
                    </div>
                    <div className='col__3' style={{height:'250px'}}>
                        <div className='project__box pointer relative'>
                            <div className='project__box__img pointer relative'>
                                <div className='project__img__box'>
                                    <img src={Project2} alt="" className='project__img '/>
                                </div>
                                <div className='mask__effect'></div>
                            </div>
                            <div className='project__meta absolute'>
                                <h5 className='project__text'>Sneakers</h5>
                                <a href='https://www.mysneakers.chadotec.com' className='project__btn'>View Details</a>
                            </div>
                        </div>
                    </div>
                    <div className='col__3' style={{height:'250px',marginTop:'70px'}}>
                        <div className='project__box pointer relative'>
                            <div className='project__box__img pointer relative'>
                                <div className='project__img__box'>
                                    <img src={Project4} alt="" className='project__img '/>
                                </div>
                                <div className='mask__effect'></div>
                            </div>
                            <div className='project__meta absolute'>
                                <h5 className='project__text'>Realstate</h5>
                                <a href='https://real-g3f6d2o3x-oumark1994.vercel.app/' className='project__btn'>Visit website</a>

                            </div>
                        </div>
                    </div>
                 

                </div>
            </div>
            
        </div>
    )
}

export default Project
