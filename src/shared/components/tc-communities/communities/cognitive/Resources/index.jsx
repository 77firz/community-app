/**
 * Static implementation of Resources page for Cognitive Community
 */

import JoinCommunity from 'containers/tc-communities/JoinCommunity';
import PT from 'prop-types';
import React from 'react';

import joinImage from
  'assets/images/communities/cognitive/resources/join-image.jpg';

import standardPrimaryButtonTheme from
  'components/buttons/standard/primary.scss';

import IbmLogoSvg from
  'assets/images/communities/cognitive/resources/ibm-logo.svg';
import LaptopSvg from
  'assets/images/communities/cognitive/resources/laptop.svg';
import MsgsSvg from
  'assets/images/communities/cognitive/resources/msgs.svg';

import { Button, PrimaryButton } from 'components/buttons';

import FaqItem from './FaqItem';
import NewsSignup from '../NewsSignup';

import style from './style.scss';

export default function Resources({
  baseUrl,
  member,
  shownFaqItems,
  toggleFaqItem,
}) {
  return (
    <main>
      <div styleName="style.container">
        <div styleName="style.content">
          <div styleName="style.faqContainer">
            <h1 styleName="style.faqContainerTitle">
              Frequently Asked Questions
            </h1>
            <FaqItem
              open={shownFaqItems.howDoIGetStarted}
              toggle={show => toggleFaqItem('howDoIGetStarted', show)}
              question="How do I get started with Cognitive?"
            >
              {
                member ? null : (
                  <div>
                    <p>
                      Start by simply signing up for the Topcoder Cognitive
                      Community. It’s free and easy, and will give you access to
                      exclusive educational resources.
                    </p>
                    <JoinCommunity
                      label="Join the Cognitive Community"
                      open={shownFaqItems.joinCommunity}
                      theme={{
                        link: {
                          button: style.faqJoinButton,
                        },
                      }}
                    />
                  </div>
                )
              }
              <p>
                Be sure to explore the IBM Watson and Cognitive sites. There you
                will find videos, demos, APIs, and helpful resources for
                starting your Cognitive journey:
              </p>
              <p>
                <strong>developerWorks</strong><br />
                <a
                  href="https://www.ibm.com/developerworks/learn/cognitive"
                  rel="noopener noreferrer"
                  target="_blank"
                >https://www.ibm.com/developerworks/learn/cognitive</a>
              </p>
              <p>
                <strong>Watson</strong><br />
                <a
                  href="https://www.ibm.com/watson"
                  rel="noopener noreferrer"
                  target="_blank"
                >https://www.ibm.com/watson</a>
              </p>
              <p>
                <strong>IBM Cognitive</strong><br />
                <a
                  href="https://www.ibm.com/cognitive"
                  rel="noopener noreferrer"
                  target="_blank"
                >https://www.ibm.com/cognitive</a>
              </p>
              <p>
                <strong>IBM Research</strong><br />
                <a
                  href="http://research.ibm.com/cognitive-computing"
                  rel="noopener noreferrer"
                  target="_blank"
                >http://research.ibm.com/cognitive-computing</a>
              </p>
              <p>
                Next, check out the fun educational challenges here in the
                Topcoder Cognitive Community. These challenges are designed to
                help you learn everything you need to compete in future
                Cognitive development challenges. New educational challenges
                launch every few weeks, so be sure to check back often.
              </p>
            </FaqItem>
            <FaqItem
              open={shownFaqItems.whyDoINeedIbmCloudAccount}
              question="Why do I need an IBM Cloud Lite account?"
              toggle={show => toggleFaqItem('whyDoINeedIbmCloudAccount', show)}
            >
              <p styleName="style.faqPSpacing">
                Once you’ve signed up for the Topcoder Cognitive Community,
                it’s time to get an IBM Cloud Lite account — entirely free to
                you. In order to participate in cognitive challenges on
                Topcoder, you’ll need to deploy your code in IBM Cloud Lite.
              </p>
              <p>
                <a
                  href="https://console.bluemix.net/registration/free?"
                  target="_blank"
                  rel="noopener noreferrer"
                  styleName="style.link"
                >Register for IBM Cloud Lite</a>
              </p>
            </FaqItem>
            <FaqItem
              open={shownFaqItems.howDoIGetIbmCloudAccount}
              question="How do I get an IBM Cloud account?"
              toggle={show => toggleFaqItem('howDoIGetIbmCloudAccount', show)}
            >
              It’s easy!
              &zwnj;<a
                href="https://console.bluemix.net/registration/free?"
                target="_blank"
                rel="noopener noreferrer"
                styleName="style.link"
              >Click here</a> to get an IBM Cloud Lite account.
            </FaqItem>
            <FaqItem
              open={shownFaqItems.prerequisites}
              question="Are there any prerequisites required to learn Cognitive computing?"
              toggle={show => toggleFaqItem('prerequisites', show)}
            >
              No, there are no prerequisites to get started! All you need is a
              passion for technology and learning.
            </FaqItem>
            <FaqItem
              open={shownFaqItems.incentives}
              question="Are there incentives to participate in the Cognitive challenges?"
              toggle={show => toggleFaqItem('incentives', show)}
            >
              Yes! In addition to learning Cognitive, you will earn Cognitive
              Points for every challenge that you successfully complete and
              your Cognitive Points are always reflected on the leaderboard.
              The Topcoder Cognitive Community member with the most Cognitive
              Points at the end of August will win an all-expenses paid trip to
              the Topcoder Open 2018 (TCO18) finals!
            </FaqItem>
            <FaqItem
              open={shownFaqItems.tco18Rules}
              question="What are the official rules for the Topcoder Open 2018 (TCO18) trip competition?"
              toggle={show => toggleFaqItem('tco18Rules', show)}
            >
              <h3>Cognitive Points</h3>
              <p>
                Every educational Cognitive challenge gives you an opportunity
                to earn Cognitive Points. Note that you can only earn Cognitive
                Points once for every educational challenge and paid challenges
                tagged with “IBM Cognitive” or “IBM Watson”.
              </p>
              <p>
                All successful submissions for the educational / fun challenges
                will be awarded 500 cognitive points.
              </p>
              <p>
                You may also earn Cognitive points by competing in prize-backed
                challenges that are tagged with “IBM Cognitive” or
                “IBM Watson&rdquo;. The placement you earn in these challenges
                (non-F2F)
                will determine how many Cognitive points will be added to your
                total on the leaderboard:
              </p>
              <p>
                1st place: 500pts<br />
                2nd place: 350pts<br />
                3rd place+: 100pts<br />
              </p>
              <p>
                For challenges tagged with “IBM Cognitive” or “IBM Watson” that
                are First 2 Finish challenges:
              </p>
              <p>Winner: 250pts</p>
              <h3>Cognitive Leaderboard and Prize Schedule</h3>
              <p>
                All Cognitive Points earned between January 2018 and August 31,
                2018 are eligible for the TCO18 trip. All challenges that start
                in August 2018 are counted.
              </p>
              <p>
                After August 2018, the leaderboard will reset. All Cognitive
                Points earned between September 2018 and August 31, 2019 are
                eligible for the TCO19 trip prize.
              </p>
              <h3>TCO Trip Prizes</h3>
              <p>
                The Topcoder Cognitive Community member with the most
                leaderboard points (on the “All” Leaderboard) at the conclusion
                of each prize period will win an all-expenses paid trip to the
                Topcoder Open, including airfare, lodging, ground
                transportation, and certain meals. More prize details will be
                presented to the winner upon confirmation. Winner must have
                participated and earned points in at least one fun/educational
                challenge.
              </p>
              <p>
                Members may only win one trip to the TCO each year. If the
                Cognitive leaderboard winner has already won a trip to TCO
                through other Topcoder competitions, the Cognitive TCO trip
                prize will be offered to the next highest point scorer in line.
              </p>
              <h3>Tiebreaker</h3>
              <p>
                If there is a tie for first place, all tied members will
                compete in a final challenge. This challenge will be
                Cognitive-specific and reviewed to determine the winner, who
                will be awarded the TCO trip.
              </p>
            </FaqItem>
          </div>
          <div styleName="style.joinBox">
            <img
              alt="Join Community"
              src={joinImage}
              styleName="style.joinImage"
            />
            {
              member ? (
                <div>
                  <h1 styleName="style.joinHeading">
                    Welcome to the Topcoder Cognitive Community
                  </h1>
                  <p styleName="style.joinText">
                    You are now a part of the Topcoder Cognitive Community.
                    Get started by competing in challenges using IBM Cloud.
                  </p>
                  <PrimaryButton
                    theme={{ button: style.joinButton }}
                    to={`${baseUrl}/challenges`}
                  >View Challenges</PrimaryButton>
                </div>
              ) : (
                <div>
                  <h1 styleName="style.joinHeading">
                    Join the Topcoder Cognitive Community
                  </h1>
                  <p styleName="style.joinText">
                    Learn about Cognitive technologies and get hands on
                    experience as a member of the Topcoder Cognitive Community.
                  </p>
                  <JoinCommunity
                    label="Join The Cognitive Community"
                    theme={{
                      link: {
                        ...standardPrimaryButtonTheme,
                        button: `${standardPrimaryButtonTheme.button} ${
                          style.joinButton}`,
                      },
                    }}
                  />
                </div>
              )
            }
          </div>
        </div>
      </div>
      <div styleName="style.moreQContainer">
        <h1 styleName="style.moreQTitle">Still Have Questions or Need Help?</h1>
        <div styleName="style.moreQContent">
          <div styleName="style.moreQCard style.moreQCard1">
            <LaptopSvg height="100" />
            <Button
              openNewTab
              theme={{ button: style.moreQCardButton }}
              to="https://help.topcoder.com/hc/en-us/articles/219069687-Contact-Support"
            >Contact Us</Button>
          </div>
          <div styleName="style.moreQCard style.moreQCard2">
            <MsgsSvg height="100" />
            <Button
              openNewTab
              theme={{ button: style.moreQCardButton }}
              to="https://apps.topcoder.com/forums/?module=ThreadList&forumID=609116"
            >Cognitive Forum</Button>
          </div>
          <div styleName="style.moreQCard style.moreQCard3">
            <IbmLogoSvg height="100" />
            <Button
              openNewTab
              theme={{ button: style.moreQCardButton }}
              to="https://www.ibm.com/developerworks/"
            >developerWorks&reg;</Button>
          </div>
        </div>
      </div>
      <NewsSignup />
    </main>
  );
}

Resources.propTypes = {
  baseUrl: PT.string.isRequired,
  member: PT.bool.isRequired,
  shownFaqItems: PT.shape().isRequired,
  toggleFaqItem: PT.func.isRequired,
};