const FormattedHTMLMessage = require('react-intl').FormattedHTMLMessage;
const FormattedMessage = require('react-intl').FormattedMessage;
const React = require('react');

const FlexRow = require('../../../components/flex-row/flex-row.jsx');
const SubNavigation = require('../../../components/subnavigation/subnavigation.jsx');
const TitleBanner = require('../../../components/title-banner/title-banner.jsx');

const Page = require('../../../components/page/www/page.jsx');
const render = require('../../../lib/render.jsx');

require('./landing.scss');

const Landing = () => (
    <div className="educators">
        <TitleBanner className="masthead">
            <div className="inner">
                <h1 className="title-banner-h1">
                    <FormattedMessage id="teacherlanding.title" />
                </h1>
                <FlexRow className="masthead-info">
                    <p className="title-banner-p intro">
                        <FormattedMessage id="teacherlanding.intro" />
                    </p>
                    <div className="video-player">
                        <iframe
                            allowFullScreen
                            allowTransparency="true"
                            frameBorder="0"
                            height="180"
                            scrolling="no"
                            src={`https://fast.wistia.net/embed/iframe/h8hay3nnt4?seo=false&videoFoam=true`}
                            title=""
                            width="320"
                        />
                    </div>
                </FlexRow>
            </div>
            <div className="band">
                <SubNavigation className="inner">
                    <a href="#resources">
                        <li>
                            <FormattedMessage id="teacherlanding.resourcesAnchor" />
                        </li>
                    </a>
                    <a href="#connect">
                        <li>
                            <FormattedMessage id="teacherlanding.connectAnchor" />
                        </li>
                    </a>
                    <a href="#news">
                        <li>
                            <FormattedMessage id="teacherlanding.newsAnchor" />
                        </li>
                    </a>
                    <a href="#teacher-accounts">
                        <li>
                            <FormattedMessage id="teacherlanding.teacherAccountsAnchor" />
                        </li>
                    </a>
                </SubNavigation>
            </div>
        </TitleBanner>

        <div className="inner">
            <section id="resources">
                <span className="nav-spacer" />
                <h2><FormattedMessage id="teacherlanding.educatorResources" /></h2>
                <FlexRow className="educator-community">
                    <div>
                        <p>
                            <FormattedMessage
                                id="teacherlanding.educatorGuides"
                                values={{
                                    educatorLink: (
                                        <a href="https://resources.scratch.mit.edu/www/guides/en/EducatorGuidesAll.pdf">
                                            <FormattedMessage id="teacherlanding.educatorGuideLinkText" />
                                        </a>
                                    )
                                }}
                            />
                        </p>
                    </div>
                    <div>
                        <p>
                            <FormattedMessage
                                id="teacherlanding.creativeComputing"
                                values={{
                                    scratchEdLink: (
                                        <a href="http://scratched.gse.harvard.edu/guide/">
                                            <FormattedMessage id="teacherlanding.scratchEdLinkText" />
                                        </a>
                                    )
                                }}
                            />
                        </p>
                    </div>
                </FlexRow>
            </section>
            <section>
                <span className="nav-spacer" />
                <h2><FormattedMessage id="teacherlanding.studentResources" /></h2>
                <FlexRow className="guides-and-tutorials">
                    <div>
                        <a href="/projects/editor/?tutorial=all">
                            <img
                                alt="tips window icon"
                                src="/svgs/teachers/scratch-tutorials-icons.svg"
                            />
                        </a>
                        <p>
                            <FormattedMessage
                                id="teacherlanding.tutorialResources"
                                values={{
                                    tutorialLink: (
                                        <a href="/projects/editor/?tutorial=all">
                                            <FormattedMessage id="teacherlanding.tutorialLink" />
                                        </a>
                                    )
                                }}
                            />
                        </p>
                    </div>
                    <div>
                        <a href="/www/cards/en/ScratchCardsAll.pdf">
                            <img
                                alt="cards icon"
                                src="/svgs/teachers/coding-cards-icon.svg"
                            />
                        </a>
                        <p>
                            <FormattedMessage
                                id="teacherlanding.codingCardResources"
                                values={{
                                    codingCardLink: (
                                        <a href="https://resources.scratch.mit.edu/www/cards/en/ScratchCardsAll.pdf">
                                            <FormattedMessage id="teacherlanding.codingCardLink" />
                                        </a>
                                    )
                                }}
                            />
                        </p>
                    </div>
                    <div>
                        <a href="/ideas">
                            <img
                                alt="creative computing icon"
                                src="/svgs/teachers/ideas-page-icon.svg"
                            />
                        </a>
                        <p>
                            <FormattedMessage
                                id="teacherlanding.ideasResources"
                                values={{
                                    ideasPageLink: (
                                        <a href="http://scratch.mit.edu/ideas">
                                            <FormattedMessage id="teacherlanding.ideasLink" />
                                        </a>
                                    )
                                }}
                            />
                        </p>
                    </div>
                </FlexRow>
            </section>
            <section id="connect">
                <span className="nav-spacer" />
                <h2><FormattedMessage id="teacherlanding.connectingWithEducators" /></h2>
                <FlexRow className="educator-community">
                    <div>
                        <p>
                            <FormattedMessage
                                id="teacherlanding.teachingWithScratch"
                                values={{
                                    teachingWithScratchLink: (
                                        <a href="https://www.facebook.com/groups/TeachingwithScratch/">
                                            <FormattedMessage id="teacherlanding.teachingWithScratchLink" />
                                        </a>
                                    )
                                }}
                            />
                        </p>
                    </div>
                    <div>
                        <p>
                            <FormattedMessage
                                id="teacherlanding.attendMeetups"
                                values={{
                                    meetupLink: (
                                        <a href="https://www.meetup.com/pro/scratched/">
                                            <FormattedMessage id="teacherlanding.meetupLink" />
                                        </a>
                                    )
                                }}
                            />
                        </p>
                    </div>
                </FlexRow>
            </section>
            <section>
                <span className="nav-spacer" />
                <h2><FormattedMessage id="teacherlanding.moreGetStarted" /></h2>
                <FlexRow className="educator-community">
                    <div>
                        <p>
                            <FormattedMessage
                                id="teacherlanding.csFirst"
                                values={{
                                    csFirstLink: (
                                        <a href="http://g.co/csfirst">
                                            <FormattedMessage id="teacherlanding.csFirstLink" />
                                        </a>
                                    )
                                }}
                            />
                        </p>
                    </div>
                    <div>
                        <p>
                            <FormattedMessage
                                id="teacherlanding.codeClub"
                                values={{
                                    codeClubLink: (
                                        <a href="https://codeclubprojects.org/en-GB/scratch/">
                                            <FormattedMessage id="teacherlanding.codeClubLink" />
                                        </a>
                                    )
                                }}
                            />
                        </p>
                    </div>
                </FlexRow>
            </section>
            <section id="news">
                <span className="nav-spacer" />
                <h2><FormattedMessage id="teacherlanding.newsAndUpdates" /></h2>
                <FlexRow className="educator-community">
                    <div>
                        <p>
                            <FormattedMessage
                                id="teacherlanding.followUs"
                                values={{
                                    facebookLink: (
                                        <a href="https://www.facebook.com/scratchteam/">
                                            <FormattedMessage id="teacherlanding.facebookLink" />
                                        </a>
                                    ),
                                    twitterLink: (
                                        <a href="https://twitter.com/scratch">
                                            <FormattedMessage id="teacherlanding.twitterLink" />
                                        </a>
                                    ),
                                    instagramLink: (
                                        <a href="https://www.instagram.com/mitscratchteam/">
                                            <FormattedMessage id="teacherlanding.instagramLink" />
                                        </a>
                                    )
                                }}
                            />
                        </p>
                    </div>
                    <div>
                        <p>
                            <FormattedMessage
                                id="teacherlanding.signupTips"
                                values={{
                                    signupTipsLink: (
                                        <a href="http://eepurl.com/cws7_f ">
                                            <FormattedMessage id="teacherlanding.signupTipsLink" />
                                        </a>
                                    )
                                }}
                            />
                        </p>
                    </div>
                </FlexRow>
            </section>
        </div>
        <div id="teacher-accounts">
            <div className="inner account-flex">
                <div id="left">
                    <h2>
                        <FormattedMessage id="teacherlanding.accountsTitle" />
                    </h2>
                    <p>
                        <FormattedHTMLMessage id="teacherlanding.accountsDescription" />
                    </p>
                    <SubNavigation
                        align="left"
                        className="teacher-account-buttons"
                    >
                        <a href="/educators/register">
                            <li><FormattedMessage id="teacherlanding.requestAccount" /></li>
                        </a>
                    </SubNavigation>
                </div>
                <img
                    alt="teacher account"
                    id="teacher-icon"
                    src="/images/teachers/teacher-account.png"
                />
            </div>
        </div>
    </div>
);

render(<Page><Landing /></Page>, document.getElementById('app'));
