import { Avatar } from "@mui/material";
import React from "react";
import "./Suggestions.css";
import { Dangerous } from "@mui/icons-material";

function Suggestions() {
    return (
        <div className="suggestions">
            <div className="suggestions__title">Suggestions for you</div>
            <div className="suggestions__usernames">
                <div className="suggestions__username">
                    <div className="username__left">
                        <span className="avatar">
                            <Avatar>S</Avatar>
                        </span>
                        <div className="username__info">
                            <span className="username">taghhizadehh</span>
                            <span className="relation">New to Instagram</span>
                        </div>
                    </div>
                    <button className="follow__button">Follow</button>
                </div>

                <div className="suggestions__username">
                    <div className="username__left">
                        <span className="avatar">
                            <Avatar>A</Avatar>
                        </span>
                        <div className="username__info">
                            <span className="username">aysun.hp_</span>
                            <span className="relation">New to Instagram</span>
                        </div>
                    </div>
                    <button className="follow__button">Follow</button>
                </div>

                <div className="suggestions__username">
                    <div className="username__left">
                        <span className="avatar">
                            <Avatar>F</Avatar>
                        </span>
                        <div className="username__info">
                            <span className="username">_.nazdi._</span>
                            <span className="relation">New to Instagram</span>
                        </div>
                    </div>
                    <button className="follow__button">Follow</button>
                </div>

                <div className="suggestions__username">
                    <div className="username__left">
                        <span className="avatar">
                            <Avatar>S</Avatar>
                        </span>
                        <div className="username__info">
                            <span className="username">sa3ina</span>
                            <span className="relation">New to Instagram</span>
                        </div>
                    </div>
                    <button className="follow__button">Follow</button>

                </div>
                <div className="suggestions__username">
                    <div className="username__left">
                        <span className="avatar">
                            <Avatar>A</Avatar>
                        </span>
                        <div className="username__info">
                            <span className="username">jabb.arovaa</span>
                            <span className="relation">New to Instagram</span>
                        </div>
                    </div>
                    <button className="follow__button">Follow</button>

                </div>
                <div className="suggestions__username">
                    <div className="username__left">
                        <span className="avatar">
                            <Avatar>L</Avatar>
                        </span>
                        <div className="username__info">
                            <span className="username">laman.nazirli</span>
                            <span className="relation">New to Instagram</span>
                        </div>
                    </div>
                    <button className="follow__button">Follow</button>

                </div>
                <div className="suggestions__username">
                    <div className="username__left">
                        <span className="avatar">
                            <Avatar>SH</Avatar>
                        </span>
                        <div className="username__info">
                            <span className="username">shaxxanaa</span>
                            <span className="relation">New to Instagram</span>
                        </div>
                    </div>
                    <button className="follow__button">Follow</button>

                </div>
                <div className="suggestions__username">
                    <div className="username__left">
                        <span className="avatar">
                            <Avatar>S</Avatar>
                        </span>
                        <div className="username__info">
                            <span className="username">__semaye</span>
                            <span className="relation">New to Instagram</span>
                        </div>
                    </div>
                    <button className="follow__button">Follow</button>

                </div>
                <div className="suggestions__username">
                    <div className="username__left">
                        <span className="avatar">
                            <Avatar>İ</Avatar>
                        </span>
                        <div className="username__info">
                            <span className="username">İsmayil.ismayilzade</span>
                            <span className="relation">New to Instagram</span>
                        </div>
                    </div>
                    <button className="follow__button">Follow</button>

                </div>
            </div>
        </div>
    );
}

export default Suggestions;