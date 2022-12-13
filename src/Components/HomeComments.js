import comment1 from "../Assets/comment1.png";
import comment2 from "../Assets/comment2.png";
import comment3 from "../Assets/comment3.png";
import comment4 from "../Assets/comment4.png";
import comment5 from "../Assets/comment5.png";
import comment6 from "../Assets/comment6.png";
import comment7 from "../Assets/comment7.png";
import comment8 from "../Assets/comment6.png";
import comment9 from "../Assets/comment9.png";
import comment10 from "../Assets/comment10.png";
import comment11 from "../Assets/comment11.png";
import comment12 from "../Assets/comment12.png";
import HomeCommentsComment from "./HomeCommentsComment.js";

export default function HomeComments() {
    let number = 300;
    return (
        <section className="comments">
            <h2>
                <span>+{number}</span>
                CLIENTES SATISFECHOS
            </h2>
            <div className="comments__comment">
                <div className="comments__comment-row row1">
                    <HomeCommentsComment
                        img={comment1}
                    />
                    <HomeCommentsComment
                        img={comment2}
                    />
                    <HomeCommentsComment
                        img={comment3}
                    />
                    <HomeCommentsComment
                        img={comment4}
                    />
                    <HomeCommentsComment
                        img={comment5}
                    />
                    <HomeCommentsComment
                        img={comment6}
                    />
                    <HomeCommentsComment
                        img={comment1}
                    />
                    <HomeCommentsComment
                        img={comment2}
                    />
                    <HomeCommentsComment
                        img={comment3}
                    />
                    <HomeCommentsComment
                        img={comment4}
                    />
                    <HomeCommentsComment
                        img={comment5}
                    />
                    <HomeCommentsComment
                        img={comment6}
                    />
                </div>
                <div className="comments__comment-row row2">
                    <HomeCommentsComment
                        img={comment7}
                    />
                    <HomeCommentsComment
                        img={comment8}
                    />
                    <HomeCommentsComment
                        img={comment9}
                    />
                    <HomeCommentsComment
                        img={comment10}
                    />
                    <HomeCommentsComment
                        img={comment11}
                    />
                    <HomeCommentsComment
                        img={comment12}
                    />
                    <HomeCommentsComment
                        img={comment7}
                    />
                    <HomeCommentsComment
                        img={comment8}
                    />
                    <HomeCommentsComment
                        img={comment9}
                    />
                    <HomeCommentsComment
                        img={comment10}
                    />
                    <HomeCommentsComment
                        img={comment11}
                    />
                    <HomeCommentsComment
                        img={comment12}
                    />
                </div>
            </div>
        </section>
    )
}