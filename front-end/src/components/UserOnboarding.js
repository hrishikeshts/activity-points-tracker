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
        <div className='vh-100 pt-5'>
            <div
                id='carouselExampleIndicators'
                className='carousel slide my-auto'
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
                {/* <a
                    className='carousel-control-prev'
                    href='#carouselExampleIndicators'
                    role='button'
                    data-slide='prev'
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
                >
                    <span
                        className='carousel-control-next-icon'
                        aria-hidden='true'
                    ></span>
                    <span className='sr-only'>Next</span>
                </a> */}
            </div>
            <button
                className='btn mx-auto my-5 start-btn d-block col-7'
                type='submit'
            >
                <Link to='/' className='no-underline'>
                    Get Started
                </Link>
            </button>
        </div>
    );
}

function UserOnboardingContent({ id, title, desc }) {
    return (
        <div className={id === 1 ? "carousel-item active" : "carousel-item"}>
            <div className='w-100 user-select-none fig-container'>
                <figure className={"data-rafiki-" + id}></figure>
                <div className=' text-center m-0 dark-blue-text'>
                    <div className='mt-5 title'>{title}</div>
                    <div className='mt-3 m-4 onboarding-desc'>{desc}</div>
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
            className={id === 1 ? "m-4 active" : "m-4"}
        >
            <div></div>
        </li>
    );
}
