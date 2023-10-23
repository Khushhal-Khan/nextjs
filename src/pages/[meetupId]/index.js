//import React from 'react'

import { Fragment } from "react";
import MeetupDetail from "../../../components/meetups/MeetupDetail";
import Head from "next/head";

const MeetupDetails = () => {
  return (
    <Fragment>
    <Head>
      <title>{props.meetupData.title}</title>
      <meta name="description" content={props.meetupData.description}/>
    </Head>
      <MeetupDetail
        image="https://visitukraine.today/media/blog/previews/z4MpSyGSXd8fYvYFqaoYhlemjscQG9ss3uNN29AS.jpg"
        title="a first meetup"
        address="Some street 5, some city"
        description="the meetup description"
      />
    </Fragment>
  );
};

export const getStaticPaths = async() => {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: 'm1',
        },
      },
      {
        params: {
          meetupId: 'm2',
        },
      },
    ],
  };
}

export const getStaticProps = async(context) => {
      const meetupId = context.params.meetupId;
      console.log(meetupId)

      return {
        props: {
          meetupData: {
            image:
              "https://visitukraine.today/media/blog/previews/z4MpSyGSXd8fYvYFqaoYhlemjscQG9ss3uNN29AS.jpg",
              id:meetupId,
              title: 'first meetup',
              address: 'some street',
              description: 'this is firt meetup',
          },
        },
      };
    }


export default MeetupDetails;
