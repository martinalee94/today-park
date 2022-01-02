import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Header } from "./Header";
import Map from "./Map";
import ReactTooltip from "react-tooltip";
import { ReactComponent as BackIcon } from "../image/back.svg";
import { ReactComponent as StarIcon } from "../image/star.svg";
import { ReactComponent as BookmarkIconEmpty } from "../image/bookmark-empty.svg";
import { ReactComponent as BookmarkIcon } from "../image/bookmark-maked.svg";
import { SidebarMenu } from "./SidebarMenu";
import { BasicLink } from "./BasicLink";

const dummyparkdetail = [
  {
    id: 4,
    park_name: "봉천11배수지공원(놀이터부근)",
    gu_id: 135,
    full_address: "서울특별시 관악구 인헌동 산3-8",
    si_address: "서울특별시",
    gu_address: "관악구",
    dong_address: "인헌동",
    latitude: "374,691,872,300,000.00",
    longitude: "37.46918723",
    park_image: null,
    total_equipments: 3,
    equipments: [
      {
        equipment_name: "역기내리기",
        quantity: 1,
      },
      {
        equipment_name: "다리들어올리기",
        quantity: 2,
      },
    ],
    total_reviews: 2,
    avg_score: 3.5,
  },
];

const dummyreview = [
  {
    id: "elice@test.com",
    nickname: "토끼",
  },
];

export function SidebarSearchDetail() {
  const [content, setContent] = useState("");
  const detailList = [];
  dummyparkdetail.forEach((item) => {
    detailList.push(
      <>
        <div className="park">
          <div class="title">
            <h3>
              {item.park_name}
              <div className="rate">
                <StarIcon className="star" width="24" height="24" />
                {item.avg_score}
              </div>
            </h3>
            <BookmarkIconEmpty className="bookmark" width="24" height="24" />
            <p>{item.full_address}</p>
          </div>
          <div className="equipments">
            <h4>운동기구 종류</h4>
            <ul>
              {item.equipments.map((item) => {
                return (
                  <>
                    <li>
                      {item.equipment_name}({item.quantity})
                    </li>
                  </>
                );
              })}
            </ul>
          </div>
          <h4 className="totalReviews">리뷰({item.total_reviews})</h4>
        </div>
      </>
    );
  });
  return (
    <>
      <Header />
      <section className="search">
        <SidebarMenu item={"search"} />
        <div className="sidebar">
          <Link to="/search">
            <BackIcon width="24" height="24" className="backIcon" />
          </Link>
          <div className="mapAPI"></div>
          <div class="parkDetailContainer">
            <div className="parkDetail">{detailList}</div>
            <form className="createReview">
              <textarea placeholder="내용을 입력해주세요." />
              <br />
              <button type="submit">등록하기</button>
            </form>
            {/* <div className="reviews">리뷰 목록</div> */}
          </div>
        </div>
        <Map setTooltipContent={setContent} />
        <ReactTooltip>{content}</ReactTooltip>
      </section>
    </>
  );
}
