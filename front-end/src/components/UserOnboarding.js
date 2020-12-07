import React from "react";
import { Link, Redirect } from "react-router-dom";
import "./UserOnboarding.css";

const UserOnboardingArray = [
    {
        id: 1,
        title: "Manage And Keep Track Of Your Activity Points",
        desc:
            "With just a few taps, you can manage and track your activity points.",
    },
    {
        id: 2,
        title: "Keep Your Files And Data Safe And Secure",
        desc:
            "Don’t worry about your missing files, it’s all safely stored here.",
    },
    {
        id: 3,
        title: "Easy And Simple Data Collection For The Teachers",
        desc: "Manage and collect data and files from the students easily.",
    },
];

export default function UserOnboarding() {
    return (
        <div className='min-vh-93 d-flex flex-column justify-content-end onboarding-bg'>
            <div>
                <div
                    id='carouselExampleIndicators'
                    className='w-100 carousel slide my-auto'
                    data-ride='carousel'
                >
                    <ol className='carousel-indicators'>
                        {UserOnboardingArray.map((UserOnboardingObj) => {
                            return (
                                <UserOnboardingLi
                                    key={UserOnboardingObj.id}
                                    {...UserOnboardingObj}
                                />
                            );
                        })}
                    </ol>
                    <div className='carousel-inner'>
                        {UserOnboardingArray.map((UserOnboardingObj) => {
                            return (
                                <UserOnboardingContent
                                    key={UserOnboardingObj.id}
                                    {...UserOnboardingObj}
                                />
                            );
                        })}
                    </div>
                    <div className='d-none d-md-block'>
                        <a
                            className='carousel-control-prev'
                            href='#carouselExampleIndicators'
                            role='button'
                            data-slide='prev'
                            draggable='false'
                        >
                            <span
                                className='carousel-control-prev-icon'
                                aria-hidden='true'
                            ></span>
                            <span className='sr-only'>Previous</span>
                        </a>
                        <a
                            className='carousel-control-next'
                            href='#carouselExampleIndicators'
                            role='button'
                            data-slide='next'
                            draggable='false'
                        >
                            <span
                                className='carousel-control-next-icon'
                                aria-hidden='true'
                            ></span>
                            <span className='sr-only'>Next</span>
                        </a>
                    </div>
                </div>
            </div>
            <div className='bg-white px-md-5'>
                <div className='m-5 pb-md-3 pt-md-3'>
                    <Link to='/login' className='no-underline'>
                        <button
                            className='btn mx-auto start-btn d-block'
                            type='submit'
                        >
                            Get Started
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

function UserOnboardingContent({ id, title, desc }) {
    return (
        <div className={id === 1 ? "carousel-item active" : "carousel-item"}>
            <div className='w-100 user-select-none'>
                <figure className={"data-rafiki-" + id}></figure>
                <div className=' text-center px-md-5 m-0 dark-blue-text'>
                    <div className='mt-5 mx-auto title'>{title}</div>
                    <div className='m-4 mb-3 mb-md-4 mx-auto onboarding-desc'>
                        {desc}
                    </div>
                </div>
            </div>
        </div>
    );
}

function UserOnboardingLi({ id }) {
    return (
        <li
            data-target='#carouselExampleIndicators'
            data-slide-to={id - 1}
            className={id === 1 ? "m-2 mb-3 m-md-3 active" : "m-2 mb-3 m-md-3"}
        >
            <div></div>
        </li>
    );
}
