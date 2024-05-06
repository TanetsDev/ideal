"use client";

import Image from "next/image";
import MainContainer from "../Containers/MainContainer";
import { useEffect, useState } from "react";
import EditLoginForm from "../Form/EditLoginForm";
import ListItem from "./ListItem";
import PersonalDataForm from "../Form/PersonalDataForm";
import MyOrders from "./MyOrders";
import BonusAccount from "./BonusAccount";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import authSelector from "@/redux/auth/authSelector";
import { clearToken } from "@/redux/auth/authSlice";
// import { useDeleteUserMutation } from "@/redux/auth/authApi";

const PersonalOffice = () => {
  // const [deleteUser, { isLoading }] = useDeleteUserMutation();

  const [openList, setOpenList] = useState<number | null>(null);
  const dispatch = useDispatch();
  const router = useRouter();
  const name = useSelector(authSelector.getName);
  const lastName = useSelector(authSelector.getLastName);
  const email = useSelector(authSelector.getEmail);
  const token = useSelector(authSelector.selectToken);
  const idUser = useSelector(authSelector.getid);

  console.log(idUser);

  useEffect(() => {
    token ? "" : router.push("/sign_in");
  }, [token, router]);

  const handleDeleteUser = async () => {
    // const deletedUser = await deleteUser();
    // const deletedUser = await fetch("/api/user", {
    //   // headers: myHeaders,
    //   method: "DELETE",
    // });
    console.log("handleDeleteUser");
  };

  const handleLogout = () => {
    dispatch(clearToken());
  };

  const toggleList = (listId: number) => {
    setOpenList((prevListId) => (prevListId === listId ? null : listId));
  };
  return (
    <section className=" pt-[114px]  pb-[70px] ">
      <div
        className=" border-l  xl:border-[#ECE7E7] absolute inset-y-0  left-[370px] hidden xl:block   
    
      z-[-1]
      "
      ></div>

      <MainContainer className="  lg:gap-[27px]  justify-center   ">
        <div className=" xl:flex xl:items-start xl:gap-[120px]">
          <div className="xl:max-w-[300px] xl:flex xl:flex-col xl:justify-center   ">
            <div className="flex  md:justify-start items-center gap-[8px] xl:justify-center ">
              <Image
                src="/images/avatar.png"
                alt="Особистий кабінет"
                className=" size-[50px] md:size-[50px] "
                width="50"
                height="50"
              />
              <ul>
                <li className="flex gap-[4px]  font-manrope text-basicBlack text-[20px]  leading-[19px] ">
                  <h2>{name ? name : "user"} </h2>{" "}
                  <h2>{lastName ? lastName : "user"}</h2>
                </li>
                <li className="text-secondaryGrey text-[14px]  leading-[19px] pt-[4px]">
                  <p>{email ? email : "user@gmail.com"}</p>
                </li>
              </ul>
            </div>
            <ul className=" max-w-full pt-[20px] md:pt-[30px] xl:pl-[60px]">
              <ListItem
                title="Мої замовлення"
                isOpen={openList === 1}
                toggleList={() => toggleList(1)}
              >
                <div className="    xl:hidden">
                  <MyOrders />
                </div>
              </ListItem>
              <ListItem
                title="Бонусний рахунок"
                isOpen={openList === 2}
                toggleList={() => toggleList(2)}
              >
                <div className="    xl:hidden">
                  <BonusAccount />
                </div>
              </ListItem>
              <ListItem
                title="Особисті данні"
                isOpen={openList === 3}
                toggleList={() => toggleList(3)}
              >
                <div className="    xl:hidden">
                  <PersonalDataForm />
                </div>
              </ListItem>
              <ListItem
                title="Логін та пароль"
                isOpen={openList === 4}
                toggleList={() => toggleList(4)}
              >
                <div className="    xl:hidden">
                  <EditLoginForm />
                </div>
              </ListItem>

              <li className="pb-[10px]">
                <div className="flex items-center justify-between font-manrope  ">
                  <button
                    type="button"
                    className={`"text-[16px]  leading-[22px]  hover:text-darkViolet hover:cursor-pointer " `}
                    onClick={handleLogout}
                  >
                    Вийти
                  </button>
                </div>
              </li>

              <li className="pt-[20px]">
                <div className="flex items-center justify-between font-manrope  ">
                  <button
                    type="button"
                    className={`"text-[14px] text-[#3F3F3F]  leading-[19px] hover:text-darkViolet hover:cursor-pointer " `}
                    onClick={handleDeleteUser}
                  >
                    Видалити акаунт
                  </button>
                </div>
              </li>
            </ul>
          </div>
          <div className="  hidden  xl:flex xl:w-2/3">
            {openList !== null && (
              <div className="xl:w-full">
                {openList === 1 && <MyOrders />}
                {openList === 2 && <BonusAccount />}
                {openList === 3 && <PersonalDataForm />}
                {openList === 4 && <EditLoginForm />}
              </div>
            )}
          </div>
        </div>
      </MainContainer>
    </section>
  );
};
export default PersonalOffice;
