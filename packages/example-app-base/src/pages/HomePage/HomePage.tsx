import * as React from 'react';
import { Async, css, Icon, Image, Link, PrimaryButton, TooltipHost } from 'office-ui-fabric-react';
import { trackEvent, EventNames, getSiteArea } from '../../utilities/index2';
import { Badge } from '../../components/Badge/index';
import * as styles from './HomePage.module.scss';

const iconStyles = {
  root: {
    color: '#979593',
    fontSize: '20px',
    height: '20px'
  }
};

/**
 * List of App/Brand icon names that use UI Fabric.
 */
const fabricUseIcons = [
  { icon: 'OutlookLogoInverse', title: 'Outlook' },
  { icon: 'OneDriveLogo', title: 'OneDrive' },
  { icon: 'WordLogoInverse', title: 'Word' },
  { icon: 'ExcelLogoInverse', title: 'Excel' },
  { icon: 'PowerPointLogoInverse', title: 'PowerPoint' },
  { icon: 'OneNoteLogoInverse', title: 'OneNote' },
  { icon: 'SharePointLogoInverse', title: 'SharePoint' },
  { icon: 'TeamsLogoInverse', title: 'Teams' },
  { icon: 'YammerLogo', title: 'Yammer' },
  { icon: 'DelveLogoInverse', title: 'Delve' },
  { icon: 'ProjectLogoInverse', title: 'Project' },
  { icon: 'PlannerLogo', title: 'Planner' },
  { icon: 'MicrosoftFlowLogo', title: 'Flow' },
  { icon: 'PowerAppsLogo', title: 'PowerApps' },
  { icon: 'AzureLogo', title: 'Azure' }
];

export interface IHomePageProps {}

export interface IHomePageState {
  isMounted: boolean;
  isMountedOffset: boolean;
}

export class HomePage extends React.Component<IHomePageProps, IHomePageState> {
  public readonly state: IHomePageState = {
    isMounted: false,
    isMountedOffset: false
  };

  private _async = new Async();

  public componentDidMount() {
    this._async.setTimeout(() => {
      this.setState({ isMounted: true }, () => {
        this._async.setTimeout(() => {
          this.setState({ isMountedOffset: true });
        }, 10);
      });
    }, 10);
  }

  public componentWillUnmount() {
    this._async.dispose();
  }

  // tslint:disable jsx-no-lambda
  public render() {
    const { isMountedOffset } = this.state;

    return (
      <div className={css('homePage-wrapper', isMountedOffset && styles.isMountedOffset)}>
        <section className={css(styles.homePageSection, styles.heroSection)}>
          <div className={css(styles.sectionContent)}>
            <div className={css(styles.col, styles.oneHalf)}>
              <h2 className={css(styles.sectionTitle)}>Create amazing experiences</h2>
              <p>
                Together, we’ve created Microsoft UI Fabric, a collection of UX frameworks you can use to build experiences that fit
                seamlessly into a broad range of Microsoft products.
              </p>
              <p>Connect with the cross-platform principles, experiences, styles and controls you need to do amazing things. </p>
              <PrimaryButton
                href="#/about"
                title="Learn more"
                className={styles.getStarted}
                onClick={ev => this._onInternalLinkClick(ev, '#/about')}
              >
                Learn more
              </PrimaryButton>
            </div>
            <div className={css(styles.col, styles.oneHalf, styles.illustrationWrapper)}>
              <Image
                src="https://uifabric.azurewebsites.net/media/images/home/fabric-home-v2.svg"
                className={styles.illustration}
                alt="UI Fabric illustrated"
              />
            </div>
          </div>
        </section>
        <section className={css(styles.homePageSection, styles.platformsSection)}>
          <div className={css(styles.sectionContent)}>
            <div className={css(styles.col, styles.oneHalf)}>
              <div className={styles.invertedContent}>
                <h2 className={css(styles.sectionTitle)}>Build across platforms</h2>
                <p>
                  We're broadening our guidance to include more platforms and create an open source system, making it possible for us all to
                  evolve together.
                </p>
              </div>
            </div>
            <div className={css(styles.col, styles.oneHalf, styles.cardWrapper)}>
              <div className={styles.card}>
                <header className={styles.cardHeader}>
                  <h3>Web</h3>
                  <Icon iconName="TVMonitor" styles={iconStyles} className={styles.cardIcon} title="Web icon" />
                </header>
                <ul className={styles.cardList}>
                  <li>
                    <Link href="#/experiences/web" disabled onClick={ev => this._onInternalLinkClick(ev, '#/experiences/web')}>
                      Experiences <em>(coming soon)</em>
                    </Link>
                  </li>
                  <li>
                    <Link href="#/styles/web" onClick={ev => this._onInternalLinkClick(ev, '#/styles/web')}>
                      Styles
                    </Link>
                  </li>
                  <li>
                    <Link href="#/controls/web" onClick={ev => this._onInternalLinkClick(ev, '#/controls/web')}>
                      Controls
                    </Link>
                  </li>
                </ul>
              </div>
              <div className={styles.card}>
                <header className={styles.cardHeader}>
                  <ul className={styles.iconList}>
                    <li className={styles.iconListIcon}>
                      <Icon iconName="AppleLogo-home" className={styles.customIcon} ariaLabel="Apple logo" />
                    </li>
                    <li className={styles.iconListIcon}>
                      <Icon iconName="AndroidLogo-home" className={styles.customIcon} ariaLabel="Android logo" />
                    </li>
                  </ul>
                  <Badge className={styles.comingSoon}>Coming soon</Badge>
                </header>
                <p>iOS, Android and Mac are in development.</p>
              </div>
            </div>
          </div>
        </section>
        <section className={css(styles.homePageSection, styles.resourcesSection)}>
          <div className={css(styles.sectionContent)}>
            <div className={css(styles.col, styles.oneHalf)}>
              <h2 className={css(styles.sectionTitle)}>Discover resources</h2>
              <p>Find design, inclusive and developer onboarding resources, and learn about how to become a contributor.</p>
              <PrimaryButton href="#/resources" title="UI Fabric resources" className={styles.getStarted} onClick={this._onCTAClick}>
                Get started
              </PrimaryButton>
            </div>
            <div className={css(styles.col, styles.oneHalf, styles.illustrationWrapper)}>
              <Image
                src="https://uifabric.azurewebsites.net/media/images/home/resources.svg"
                className={styles.illustration}
                alt="UI Fabric resources illustration"
              />
            </div>
          </div>
        </section>
        <section className={css(styles.homePageSection, styles.usageSection)}>
          <div className={css(styles.sectionContent)}>
            <div className={css(styles.col, styles.oneHalf)}>
              <div className={css(styles.invertedContent)}>
                <h2 className={css(styles.sectionTitle)}>Who in Microsoft uses Fabric?</h2>
                <p>From Word, PowerPoint and Excel to PowerBI, many teams in Microsoft utilize the functionality of Fabric.</p>
              </div>
            </div>
            <div className={css(styles.col, styles.oneHalf, styles.useIconListWrapper)}>
              <div className={css(styles.invertedContent)}>
                <ul className={css(styles.useIconList)}>
                  {fabricUseIcons.map((icon, iconIndex) => (
                    <li key={iconIndex} className={css(styles.useIconListItem)}>
                      <TooltipHost content={icon.title} id={icon.icon + iconIndex} styles={{ root: { display: 'inline-block' } }}>
                        <Icon iconName={icon.icon} className={css(styles.useIcon)} aria-describedby={icon.icon + iconIndex} />
                      </TooltipHost>
                    </li>
                  ))}
                </ul>
                <p>
                  <strong>+45 additional Microsoft sites and products</strong>
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
  // tslint:disable jsx-no-lambda

  private _onCTAClick = (ev: React.MouseEvent<{}> | React.KeyboardEvent<{}>): void => {
    trackEvent(EventNames.ClickedGetStartedLink);
  };

  private _onInternalLinkClick = (ev: React.MouseEvent<{}> | React.KeyboardEvent<{}>, url: string): void => {
    trackEvent(EventNames.ClickedInternalLink, {
      topic: url, // @TODO: Remove topic when data is stale.
      currentArea: getSiteArea(),
      nextArea: getSiteArea(url),
      nextPage: url,
      currentPage: window.location.hash
    });
  };
}

// tslint:disable:max-line-length
const graphic =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPAAAACWCAYAAADg+AXVAAAgAElEQVR4Ae19B5gcxZX/r7on7MzmXWklreIqgJAQQiDAAgMiSyCc8TmBcTqcsEkW4fB57QPLIjlwBuO/fTidA+ZvG4OQhYQCJhlEEggJ0CZlrVbavBO7332vZ3qmJ3fPzu6Odru+T+rqqlfpt/O6ql699wqwg42AjcAxi4DQe37qzVsrXZ6grL9ne06Zt6T7zx8XyklvUKnS3+PORqvnVaDC98KZwqe/208bARuBwSPg0KsIoeul0ACO09+zPZu2bl4C4MWu9s4HAFyVjVbP68PROwB8W3/P9fSvueTLBPGJZDoh6NGSS9f9d3K6lfeFN2+4gYAbQJhspZxNO3YREMB2CPzgjdUX/q6YUJCKqTPGvhDELQCdy//+X8sS7clxlXC7kc5qfOHKDd8mwr0281pFbmzTEzCfCL9dtHLjBcWERBEzMJXoQH2p4Xk9ChBiq4Z4oqXYFyxR28Q2AgYEVKhfMryOeLRoGXiokCFg+lDVbdc7BhAQVF1MoxzsbDYkYyGiaqX50VJSQ7H6lf2bQX1tsXc7YiNgFoFyhx/XzdqE48ra8ad9p+KJgydqRR0uGSecPh0lpS7sem0vOtv7tHTV44LvuCngp+edvXB0RtLNtjecdEXJwAD8SuebIShhULAL1NM0nJjYbY0yBM4dtwsrJr6ljeoL05+PMfD4yVUYN6VKS5+9aApeXrdTiwfraxGqi6QHptUlMLDH6fAWEzzFysCyKBkvQw2DN71UTIjZfTnmEHi3ry7W511942PxcIh/X5HgHwjqUUg+Q9wfjzNBdamjJkZYBJFiZWCFfO0KVAWAAErqAH/7oOHq6OiYfP5drw+6HruCYwsBZuArX/ksTqnagy0ds2OdP7y3G2892wSH04HD+7pi6a79RyDCYZDDAWd7PJ0JykrkKiKShBBqrMAIRoqVgQlqmP9FoSkMVqqqFtXyZwT/7mOuaWZi40ysA8BMnC4429OnOyTZdfjwYf4dFcXGuHil0JIsIGRQqA/wd6TD2HKaJEnF+sGyPBa7wMggIEmQZVkuGr4pmo6k/DlIJYBn3sLMvin12wk2AqMAgdiM5ETV6S6veV3oVwFU1VV/Venvud4MDqwLbekQiITg/a9wVUHUngy1twUIpl/WmGlfp/nZ50/qdzgcpfq7/bQRsIIAKaFWK/RDTRtj4FdWL7bMHdsWin4A/K/QQRLuCkFK/BwYkrMgbZw2q1pxOGLDLkiddiVjBwGfz9fv8xWPTU7sl3z9K0eWqZJcbuZPIbnE0z+cX3n0uY7u04QanmGmjEPB26dPqt1uhhZAWOnbowiWQof7Qb5DJovZZDYCYwuBGAOTwI9BqilrJBGWNWskEVK+DmHOGkkRsGKN5HHULXEThUB9e20GHlu/SXu0FhCIMbCFMsNBOhBufz4gVKVMa8xVWZD973B03G7DRmA4EShWBnbJZTPkmC60GgIVQIA1nMDabdkIDAcCxcrAQaWnRRFQQKGBgmhhDQeYdhs2AsONQLEysEuqaHCAwoCvA1QANcrhBnY42+v1h/HcziNQScX7545DhacwEvvhHIPdVn4IFCsDB6m3ORTRhQZE2XSQ/zAQHshvlDlKhRQVb7R1s9a1FiSOCKG9c1zwkTQAPa5lS5qWdjQ9QssFpGg57RSb49ppdqQOIQiCIjR6Yxq91kaURmuatDa1drR2I+2nq7+7P4SfrGvGyTOq4JAl3PXYO7j2kgbUlrkyGIEkmYYYXg1RbVxsSJISkpLir/FYQpmk5PhrPOZ0uli9KaGY/WIOgWJlYI88bpGLFF0XGlAPvwQaIgZe/de38OeXD5tDrMioSpwyvv3h47Hi1Elaz7xuGY+9sAvL5pk6ESyK0UiShPop08BPO1hDoFgZuC+0f1NAaNqUQe0s2NqwrFFXeY7hr78glHvjf8ZKjxMBNuI6hgJRfDYudLe57m/8ehsGAvHJwOt24P6rFxa6qRGpL/6XH5HmMzZa7ZpzZSmpYVBPC5Q9T2YkLETGV5bNxRcvmAn+Y/NPib8bMMS1HxhrZlN0UUkUi2tloun8O9TrSI6r0R8pPziu/WRT4hHr50jZ5Hi07lhbkT4c7g1izSsH4HbIYBX7Na/tx2fOmoq6Wk8hoBmWOmRJHrLZ9+XmTjyzI9UY5rWWLixqiBjtD8sgh6iRYmXgzuB7v+0Xuvmf5AbUwBBBAG3/JcvHzg8+GYiFM2qxftshzfXB55Y2oKHOVvXWMVrz6kE9mvBc+8ah0cXAROJtCJiSEpFQovrPxPYJ5izkhdifgGD2lzJH/QUluj2wenSb7VYnC17TxnnxhfMbslCMzaxASMFT2+KOIKaP86KtI/ITX/v6Qdz8geMgaxLLYxef2Az841NrPmx1GGdOqv1PAPyv0KFP2bfBB1LLwY7thkh4VehO2/UVFwKbth/GQDAiEHBIAv+2ZDLuevw9rZM9vjBefO8ozjq+trg6bbE3MQa2WG6oycvkKRd5oIRAAwegtr841O3Z9Y9CBNa8Fl8+L55ZjYtOmhBjYB4uz8KZGHjDm+3Y9PZh7NjXi5b2yIKTj+aqSp0nHekNXgHgl8UAWYyBafsPGwEx0VSnZHm1mHtti2/tss9CBRs25AxCiDUll659PCdhhKBP2bvOB5UiZyHOCkDxQZuNTVZgk41tBI72BfHcu0djIFxw4njUVbhx/KQyvHMg4g3n6bcO4zsfU+FMcrBxqNuPG3/3ZqysHmGB4eHeYAWAX5y0csMp2+668Gt63kg9YwwMSJ8EyJQ1ElT6FYAWqHS+2buRiMAHrWYZuNIx84pSdiurB2X/JtsvtA6G/cyJwD/eOARFO07QdHJwycIJWpml88bHGJiX15vf7sBFC+JeK40VV5c6sWhGFSZVlaDc4wDX2XpYFxPRlxev3PiTrXed/46xzHDHDQw83E1nbk8I0Tmw5pI+AQy5OJWPfRTlGDs4zQxd3jmsCaVrnOVdSREVfOLVA7HenDy9EpXeiHrp0nnj8NDTLbE8XkYnMzAfyd142Rx8fMlksKKMHq48exouvPPZsC+oOAAhhaF+FsBtev5IPIuSgYlovHLo+UqWQqvd70JpfnTIsFEUFT6ff8jqP1YqLi31jhoG3nvEh+17e2PQX2iYYedNqcD4chcvhbX8LTs6NCUPVu7QQ1WpE1edM01/RUdvAG2HBzQJtlOWVB8iH3wSmBsjGqFIvNcj1IF0zQohDg+suaSbPUKny7fTRh4BVVXR0tICdk9UU1OD8vLcqptcZs+ePejq6oLL5UJ9fT0qKysLPpi/bU08sWQh1IPrm2PtlJU4YgwcVgjr32zHBxfXx/I58vbeHvzphb14ZucR8H7aEFyxOCGyLo8lDH+kKBk4+W4kpf0lUNeOIUeHl5BWPYbyDK5parHRgSRBsnCuyBpXxuW7wxFfrpkZrKoSmCk4cLtWdYnD4fy2Dtzmrl27NAWYKVOmYO/evaYYeP/+/RrTTp8euV9u3759Wh1lZRG/DWbGbIbmsa3x5TPTP/qvRIZOrmPt64cSGPgPz+3B6sffZWW8WOB98EnTK/noKdg9EIozcYxiZCJFycDRPXC/AAr7l82BMTOAx2NNI4uX3+FwRNjGs4rTaR5SZvy+vsgRBX88rLYdDAYRCERmB4fDCbfb2u+K29Y/PjmgiWUz8zY1NaGhoQGBQAAvv/wyFi7MrVfM7fA/pzNu6jhx4kS0tbWhkAz8SnMn2nusae291NSJnoEQKrxOdA+E8KO1u2LMe/FJdbj2kllgZRkOl9/1vM3AsV9DhohxBlb79kDdvzEDpZ08nAgwA/KyecaMGdrSmRl5wYIFpj48/IEyrja43/wxsLpqyDVe49kv035o8SRMrErdib246yheb404YmVp9ZOvH8Qnzpyqnfv6Q3Ff5Ndc0BBj3q7+EA52Bax94XN1eJD55qeLQTZkpfhIzcBW+jjWaJl5ebbk5S8z3c6dOzFt2jSUllo7KOju7tb2vczM/DHgmbxQge26eTmsB6cscMsHj4fHlbo1mVtfjutat+mkWjlmYN3oRM/4+cZW3HjZbHT0BnHnX3ciqKiplenEFp9XL1s6I6wEPqhCbJEEzSBIlU6v87Ff/W1z4oVMWeotSgYmolpl77pyoz0wWyTZ14xm+UsOYRYzb2trq8awPJO+88472ixsZcnf398Pt9sN9qnMe2GefXn/bFxSD3YIfKarq05yXWfMrknLvJz3vjk1YAYPKZGN7utt3WAFjvlTKuBySAiGI7PwujcOgf9xYPoKjzPY4yvMHjioBDZDu3A+YlnGt5AEB4KP8cJBa9DEf0XJwEKII74nLnkDIlXLS1gzijABgU2SCwGeNf1+vyZBZkacOXOmqWWzXi+X6e3txaRJEacDvPcdimA8++X6zzlhXMZmeFY+fXYNnnvnSIzm8a37cNVZk/CNZbNwzxMRnWk9s8Qp8O2PnIBfbGwNDJaBP3XxmY2C6FyCqEv1ekJnf+qiMx8G8OPfr38+p6FQnIEF/QLEFZoIpGpiPRLSkxIobu6RrajAs9myk/Mkp+vzajj0CWO6ENThdjv+akyz40OPwNGjEZXEzs5OzJ071xLzDgwMaMw7VExrHP2CqZXgpbEeWH0yW/j80ulYMLUCXQd3o6S0AuPKHFh773W47OpbcPyXFmHdtnYc7PJhbmgDPjp1O+rn3YMDR+sOPvzMnp/2B8IBSNidrf50ebxsDiqB70Tmfd0qXHOwRBAIgVAD0NUQotrMTBx1tpSuqdGX1tHRcUJlZeWLDoeD9Vm1wEcp+lUZrI3k9VqTURil0CUlJYOSQpeVWdtPGqXQLAEfjBSaFTkyCZSYgb1eL3h8VgPP3PmUs9rOYOjfff4feObh72PicQshyU4cbt2BS6+/D+MbTtCqDTf9EeF3fgVRNg3qolUv+EJiWW1tbU8+bV79oaVVwf5AJ5cVQhPMp+VBIcR2QNz9v0899+ts7dhOiLKhY+dpCLCiRr5MmG+54YR+yvzTUDvtOBx89w3s37EVIV8/Hl/9Neza/FutG46GjwKuKlDfbojXbp9f0/2sta+8YTAsoJrglT8wuUJSZ1XJaZmXyYloPpH6q89cvCTrfthmYAO4dnRsIuCtrMWKlfdj7jkfgJAiQma3U8Gkvj9B7dwBvljPedxVEXD6Wir8O3/2V3r88rwui3/kkSvk2TXi58dVS9LUCoFJ5TlYUJKzSqRzlB6bf1B71GMPAafbg/dfeRM+ufpRvO/frsWSc0+ALIURfPW/QKFeyFOXQ6o9KQIMqUt8IriBNnzYkjcAamyUup86tNElIybFm1sjocyVfiIWQnrud/94liXVGYPNwBmhsTPGIgLeqlqceOEVmHHpd3iXCgSOIrTth9qG1XnyLYDs0dTuhMASf2DgtcDjF5syaPj1ly447pd7n34KoPc925ZoPGPQG0mAnEg9KyEhzYvNwGlAsZOyI8AaWPkGFry99NJL2llyvnUMRznJOwnSuFO0ptRDzyPc/GcIdw3U2V8wni9NVYV4yf/k8uW5+hQSoSUkcC4A1+lT3AnkrgxcKASyCrC4kgxFE+q3X2wENMWL3bt3a+fBDAdrUbFVkZXAOuPbt2/PS4PLSjuFopVnfDBWVXjnw1A6XoOov+CIKpx8ThsJAuVE6hrfmmWrqDEzPznh2gSCprjuSpJdzRsvp11GO73u6/RmMj1tBs6EjJ2egMC7776L6urqmDRat0Lq6Ej1uZxQMPrCqpM7duzQzpFZsYPPh5ubm2MfhHRlRjpNGn8ahHdytBsqQq80Ap1vlanHff4WEIyX1QuAbvGfdsmGvscuSGtiGKAAu99JK/hiv/xzaw2sKDRG32JGpdJQaqThstsvVgRYE6uqqirBZJBVIFmpI9dy+q233sIrr7yizdhz5szRlEBYI2v8+PHa2XJ7uzk9oJHAhtVGHbMNukRKAOLN758oH3i6QQj5IwASN7PAebLD8Zb/8YsuTu6vIJzOaVEvP8nZ6I4bUPXAKZ/w+/UvLE0hSpNgM3AaUOykRAR4tqyoiOm+YNasWRoBG/NzYF3pTIH1pU899VTMnj07NnuzUgjP5rykZkYu5iBNvgDCG1EB1fqp+BxSb9NaCfAKyOydMtmoehxJ0rqBNRf/3f/Uijn62FSio909IYSjOtZ6Oj8ZvYP9aruA2Achn//7Nc/GvQ8YCdPEbQZOA4qdlIgAM2GyKaBOwUzMM1U+geu0YhCRTxuDLSOEBMcJ/55QjWbuCmWLKqlHCOJKEOL2h1FKAXE5hYLb/U9e8sOj6y+slJ3SHRWVzh6XM5XlGL3TJknf/d/1z0/5/VPPvpLQWI6X1NpyFLCzxx4C7PaGLYiSmZg9cbCWVrbA6qm812WhF3vgYH1q/sfqmcfKlaLyhCWQak9OHmaFULFZgBwQuIbXIckEgHAS4TpPSG7+5OWeM52eksUAnkul49JiRrr0XGlxY4ZclGMkP9ty0AwEgylvtWziTybi8cJMH63S8Aw7depUjYl17xms48xHQmzcny0Y80OhEPr6Ij6ZeQ/NgrBjJTgWXIfgP68BlPhmFSB2gfIb9hMtSP4aCfUnADSe4r8NqRF3S8QGCgL/fcWFYjvB840//n1gCiASjoiEwMx8sMhv7ZNPS0VQJpcxQxF0ccS6kM2YwdgpFmixLS/rOBf78tfY70LElQPPIPTa9zNVxXvh59nUmFRyhhUFFPNZFrFaYL9l/DHs7JGeW/9sIFlJo+VLv/inZSa2l9CZ/hx2eloEeDnNAqixxrwMhjzpHFDdmfH7WhIRYiXqs9nuX0iCtO0BmxupQCgUhhJWEAopYCeI/kA4mXm5poa/3Hxe/OA5se6MbzYDZ4TGzrARSIPAvOuaIDnWpckxJgmebV0uBzylbpSWeeB0OzWPp+1HCM+/GhFcs+yvvExg5jQHTl3gxJmnuH478PcL32esKFd8zC+hcwFk59sIGBHw+XzPho68/kHnm9/7hSCyfKMn1xUKEQJBFQ4HadebOg23PwBiX8neww3imldCxnYzxe0ZOBMydrqNQAYEwt7jw57l5VdA4HsA4hd4ZaBPTnY6BcpKZZS4HWDmTRJGTg5OG//R5DKZ3m0GzoSMnW4jkAUBIf6seC5d9x2JHCcBYlD33yYfo6sqZTXiN3ZrzB8j8e0GyeebRoDGSpxvhUhWyGBcEmeHsYJGZJx8S0cyJskIuFes2UFEZwb+sXw5qXQ9gAuTaSy/C5xhtozNwKpa1Ar1Zv+Qg6VLd7kZn/Pme/3KYPtTDOXTYZKuX0IIVuJ4kv8Fnlw+T1HVrwghLgcocodMukJZ0ohg+oDcXkJnAdLOshGwioD70rVve1esu9Zz2T9mCEnMFRA3qIrawis9s0EAjveeXJ5oNJyh8JifgY248HJpuNX79HuVuB+6cYCxT0MZN7Y9lO2M1bpLlv/jHXrkil1H6NB3I1p2kd+XkPSL8CKX4aW7EG+2x5dsJJEWRpuBDbCwW1WPx7rrVEMVlqL8R+3riwgx+eMxnG1zR61ebsZ74oB/AEo4DCFJ4AvVSjxxE1cez0B//F5eS2AUCbHHUwpJLtjtKeig9nNkSSpnbARYI0uFIElTnWbhVbIAi2EQAt3ivM2mpNs2AxfJD6fYu8Hqk73dRxNMB0PBABQljNKyiKkh/0iDgWQT2WIfWWL/3CUeSCgcAzsc8vksCdRnWbZuYqblyUJXrUzsAV/6htbktEzvNgNnQGafX8U/j5g6S89QQ/pk9qZyRX327c2AQvj7wYRLpdNXlkfq8jonKtOYtOWqihmTGTQ5cLrHW5bRKXwy/Vh7lwXOgySBQJCi0y0zr4jqRafDQ0jirXTp6dJsBk6HCoDtvWHcvGMgQ27+yW4pNwN3hmhI2uZen1pVgcr4Fb2mB5KOefXCPAtLkrW7ifWyo/nJPrIGZOl00vQdJe3+lGyMq2NBhDf0eK6nzcC5ELLzcyIgRZ2h5yQcYwTBM5adKBTVyTOvtgdOt+FNg4mDVNMXYhcdAzc//YvTSQ1+TpKkmeyGRBJii6qKP8y66JrIbcxpBmwnDT0CTpcLfl9/SkOy7Bh2yX1KJ4o0QVVxiq4Ioj9NdLXbueKpV03QaSRFw8BN63/6ESGk+0Gheh6s9sWK+Fv6hCThgZYND/pI4MGZF3zlJrODs+kKhwBLnEvLK+Hr79XsgblmTvNGBViFa2n01CSABalSg+zjI6K17OIyO1U8tygYuGXjg9eTivvi3UqMEWm7CC8INzY//eBlDf88NF80Nqb4IUosNbi3CofA/PLCSSP13mS4RUPP1p5OgSFpmyvnPXi+weVyg/9lCvzhrazOfCdvpnLFlG5hpszZbSJ1btpzomwlJZHzTmBj8RFn4Hef+unJROJe0x8dwtyWsyduAjQv98axFDT+vmonnjwjD2lPAXpR55bw5BlxL5AFqHJYquAffyEZYFg6PYSNCCHNZemzlUAKvW2FfhDfYyvNZKZ1SvIt7NErMwVSDtYFcPaeLQ8tyFbGzrMRGEkE6JErZAJZdpHjAIxXt+QcwojPwAR1hXaJVJquBvr7cfTAbnjKq1BZNzH2decldTBENwP4TJpiBUniPTgrLwxFyKWuOZRta2eQJqWhxrFHFBGyfmeN5MdsvFB/8x5P10xX5ptWMuITVsnSxeEjysBN6x+aBqgZr6WfevwCzDzxVPR3d2KgvwfBgC82cAFxfOxlCCJshcOeF4cilJeXZa2WGXhgID7WrMQWM9mpupx0N4+ZKtxu97DrapvpV6Fp+vsHCvLhdjvkmezUzmrwVpRaUj4Y0SW0kEWKs119wJW1E+B0RpQDSiur4YjG9XyAyuNxO2YjUFwIkEpT8+mR1QvjRnQGhhI+m6V0TncJSsuroSphTeXM4y2HM0na6Sktx0Cf4ShYIOJgOB+U7DI2AkOMQF/QNbfMZV0d1u0oOQHAC2a7N2Iz8COPXMEuIDQ3mmUVNdp5YnlVLSqqxmnM+5GvNGpj4OUk/wtDhrMkvvQkld4xO0ibzkZguBE4MuDku4AtBwVS5FJikyVHhIF3PvbL8sU15/9/ANrlT309nQiHE79Wt3/905oAnvXnOw+34/d/34iD3UGUeCMrZxniaZNjtMlsBIYdgXePVpbs7KjA4QE3lOyHLAl929Pj/VxCQo6XYV9Cv/fUA+c6pODvCajX+xYK+BD0+eB0xpUETpk/J6o/CjicTqw47wzUTxiHw/vbtGJhgWNbY0AfvP0clQi8sLfG+wJF7o2SBFBZEsB4bwg1Hj/GeYOo9QQwrjSAUmei2W+JHOIltOkwrAzcvP6BayHEjwip8vVQMI3EVwio4TC8ZeWocEaUKtgGlYMEfPW9J3/y8JxLv3HY9GhtQosIjP5jI4uAWCAX5bpyEgujO31u7R8Q3wZyZW6HEmFmZmpvABWusCWPEsO2hG5+6oErIARf/pS2Tdax5b0uB19/HzrbD0AQQXY4tBmY0wO+Ac2jgUYETJddzjXPP3KfJ/puP2wEigcBorirkiy9CoRl7O/1YtuhKmxqmYDH3pksNTZ+a2KWIglZaZkpgaIALy2bHi6BJD2crSpmVF1g5SktQ3XdpAR/I6qioLPjQHIVp02q9TxKjY3DMo7kxu13G4EsCGTUb8hSRssKBCKyoVx0nD8sP3wi/wcAyjggTQm+doLm1YGvoAz6/drVjNxBvqJxoK8Hh/a1QAmnesggwqVt50y42sxgbRobgeFAoLGx0dTsm6kvgjArU15y+rDsgUmlWezQKzmEIOF11GHB+Aq4SyLfEpfLpTHt3q4+oPsA2BlJrqCqmlrl/+Sis/NtBIYDgUAgMKhtHRHqzPZzWBhYCLlUu2fR0Kt1NAMPYBG64ULZYRXzugcius6sgywEXvV5UYcB3IYXsUB0GEqmi4rj3lh3d+nCS76VanGejtxEGuv+DrebV71bvCIZqrbzUIPWu2U/TSIghHDknnayVUbjs+Ua84aFgUGKx2iw8CAtxJ8wN9aPPlXCS/5E6RxnHkApGnEWfoMnUYrU5XOsAgDlzlL2Zl8w5Q42OPB4Cm8PbOxzpjgz8HC7mM3UFzvdOgKucFiOnJVYL8slBMj0Eemw7IGFkKr1oWyn2hjzaotqTfJMmp9cncb4PIISPGFiSxDql48Yy9lxG4GRQiCUeF+o5W4QwfQeesgZeOvWh5xEauwe1acwI8KsURVJ7fYsRWVpFaAqkWeS+9I/UE7Do93HX35NrnW2ZSDtAjYC+SDg5AuABxEEkFHgm1ztkDNwdZd6ByCq9IY3q1MSjoc4XduXqeyxnjSv1vpTL9OFEvQj82pfQGzWae2njcBIIxB0OExdi5Kpn4QimYFbNvzsmwJYqXeUpc7dwm1YLpO2NdY+V6SCojNw5BlhZr3sm8i8ryfCmzqd/bQRGGkEXK7BzcAQ5hk487Q2CBT2b33I6+9S/0SgFcZqjoCl68y0kbthItzL7yIy8+reKAUfHqngayj4HJg92++karxPpChyaNULiVIlYMaG7biNwLAiUBoEBnFHFMG0l/yCMzBrXfm7/GsBnJOMmY+iUt3YHjcyA/M+mHlYm3l15uUT4Cjzcv5eFmRn8DFHKi4DELE/TG4013uoF7I/ok4tyfxhiRtU5Cqq5XsmAlLBYTTVtE1UtAikUew331cBYVofuuC/PFXxXS8gUpg30n2eaQnQGIUXzsy1kRmY3Y/w3pdIgZDk+AysMTehKeDOyMAQWNy0/oFPzbroq783DxMANQy57Q/wqommjJbqmPoBoLzBUhGbeNQjMCgGJguzSEGFWNsfaXQJIa7P9OdxQOEzrpQ9sLaq5mU1C7I0Z+4RgZZm3MBMHQ6hNexFF2VeWQgh7t/zj19E7LcydSA5vbcJYjDMKxxAaV6eU5J7Yr+PIgQaIz7LB+PUbGRm4NKaSWeppGaUNlWIUGRZLDuiTKzPwADxbW3sUIeZWJuB+UT1D7YAABTwSURBVD5VJiMITQeasCFcj485M968WBNyhO8C8EXTv4Wed02TpiUsmzFmls+BQBCspz7aQ6G8UgJg75J5qVQKjNAeWJHII7J4Yi1HMMKksT1wZBWtLaM1po7Is9gZNmsjaTMwb44DAS3jL8Fp+IizLYt+NH2h9emHHphxwTXa3TLU/Nx0uMOqmHzunpQfnsJyhowfgxTytAmVx6VNHo2J/MMeIi+7oxEuHhNLsSbkMziCGBlFDrfq+VdEzJy+2yxb9qr+6MFvlEbbCkdvgynxMOtGZ17eIQsgxPRMSziAMvyVZqevPJqqqMqVoV1bzg/s2vxYkIItQb+629+0qTXYvOXfEwr27uJNcEKSpRdePpfZe19LmI0lYgGDB0arAzdnS8y1FlSINeXCzx5p3vAgC5I+nanLVSKEfv6Ua9obuhQ6Ks/im9GZiZVwhImZncNRlyOSA+Rw4qdYhJ1Ui8tFE2ahE4eUEox3hBF2lKDS7UR9dcU1qlCvM7T/JghHVVI/6elrdqByUSSre5DL5/KZY2b5zIC5XM4xcYk3bxW0lZ/hB5RXlDAozcD77rvPc8MNN+TcRxeUgXmg/rD/Wx5HyYczaZM4WZDF7mMdfCYU3wNrVoPapheAzMb9LMgCyFUSXXYzNUH1D2ADxmGDWo0SNYzHjz+A6e4Ev0KGfYf4iwCecM9eqjkT6OjoOEETgyl+oH93Xn+XWKEKzR9f7HW0R9i4Y6gspIoJu2AwVBAGFkIcHsyHoKenh3/HORm4oFJo/kPMW3b9AQJ+lOmPEhIObYaNmBfqM3A61VFNpKUpcZB2aRYARYFgbS0lrEmsK2UF+4IyDoYzfYfU2XDI21L60sPXz6RrM4UyfQIvn+2jo/TY2KkaAjTIGTgU6jV1cUGmX/6g/gwlVdKdvk71i0IkGiYrkHAIXghJgIJBCKcLzJwRLY4khmLpsy6F5rk39s7kkia1PiS58dlDNaiTg/hYyX6skFp7GqrKP+UscU9SSSwSoMUUUv4TgOZ/OjaoQS+fZwFiZEwNY2MY5ojfH4AQgzgvH+b+5ttcoaTQAjiY9Iu21CUiUWmmwJAwcP3iawaaNzy4Pnkv3ErlCPPsxbOfRCAlFJE2S3KUibnL0XV0VApdLoUxngbgczgxIFzol7wYJwUwBX1YhEM4XRzEHHQCfviFSh8oPfOKLVyLb+2ypUTiES3+5HLNybbS9OPpNHWZQz2aOimbAUvrnasconJsLZ953PwBHcyS0Cy+o4ZOiAPa6UqeAxIKxQyAslWRwsC3rrzxIxA4NVshM3kb3zw0t7wksfoWhHGy+s9o8ej3SdPE0mvUxM1RJuaHwHjhw8XIfNzTBeBlCGV3R9+fj/YFL7715hsvnlPTd9rGJt9Feq2xZ3Mb8PJDsdd8IlLlcZD2sgDMuhBs8Wmno6a2Np9m7TLHGgKkplfcNz2O/GfgFSBY8g6frk9NB9Ipc3difhZmTFcPp5m4spzXs1fq5d87Ugb+NzShE0B+l0LMnD37mGVg9lUmswrsKA+8VSjISsMhDiCc/yJapahX+Bx4J06ROYjt7LGLADPvWJBC8z6/EAw8blx90+GD+/L+wQgIU76hR/8nNW8I7YI2AvkjEDnDFXm7eSLAFAOnzMAu4WhUhbhf73qYQmtAmMTvQuB+WTizOmjXy11++oSNRk8cj+B4bMB0Pdvykw+VTkE7FqADM9GFiejn/qhrXz30/lCITFl/zD95QcOSJWf92iE7YutrRVHgZ1VNPn6WJJSUmNYjTzuGDevXYeeOt7W8yZOn4MMfvSJGVzvOtK+yWJliifDSEhiMq7ZiGUn2fhRi9jW00AIgX6FHfgz83dWrWcMhpuVw68obY2cHRKL5v1b/4DVDBzNGP7fhZwlnrW/TLBwd5H1k6zEJLNrmwAxcC3/w7XNqV0WTUh5EFBSS1CaImgh488sTqe+j9RWqcSkYDivw+SLn5ays4PUa9EBSasyd4PXG1Vi9paWonzw5d6EipdCU5aJ9K/APu0hHXNhuCYEWIizOq1ZB+TFwtsYkmJvpuA5VVV+VBM7nbTwbJuyENUu/bP3gvIMo5X88XWa+hzV6FKWLEh48KPC3rj71e8d7cfH4zKaJudo2m2/8UJgtU1x0+qlAcfXqWOkNYRB3WJOYaWacKUvobIVIkkwtVbkOgvq0quJ8Xue2kwdhtvctgnDAT9KXt/XjfxYKLB2XwcXHIPppZFpn9EbFQVRXNEXdbhckPq8f5cHP1/oYreUGMV4BsYMt67KEdiBR2SlOS9MaGxtrGhsbj8bTUmM5GVhA+HN0IrVWVqQISg96nMrtpKqebuGMWhSlJR32RIWAa9/qx9ozyjGxwDzs0HS8I0MyMvOwD7LADUoSS6FHPwPHzFijK8fBwCgLx44wZbahFsCbBFyQqY2wv+8kAFk9ruacFsm4bCbzS+iTVny1U1WUO/hrFsz6EcrU/aFN7wkT7ms2vaDIqzOjiYHzAmCMF5JLSrLfFCIJzW49E0wq0cJMeXp6zhlYJ+QnWWBgpj9u+TdX7XzyR+e5pfCFxnqKJf7YwSC+Od1V4N15fHTG2TieemzGfL6h/dgdm6hk73VjY+PArTff+C4IaT0/SAJNCotzMhwZESEnA+ecgY1dlC3sgbmcEIIqVe8Hq5SBt4z1FEucFWV+vnvojkYcTkvfx2KBxe5HIRGgzIqEiiokCPwqS3MnZ8nTsiwxMIzL6Vw1R/PrL79moMzhP7eO+gdMFhlWsifaE2yJB922kWmdhv3woCu2KzgmERAQGTWBBRvLOkoeyOIaZsHdd9+U9ZqV3FOEgF8XpJFqXgptRHv+shuOzlh/9U8A3GJML4b4WdWFFcwYmXY07YHdbvcY0YX2Q2XXx4UKgl7X+Se1SlW6884799y68sZHAXw8NR+Org7w9vOxNHlaUm4GJuHXjd/JYV6Ildxgaal890Bv6DOKJPE1oEURlpd24Z4549lPwJAE42w8JA0MY6V8XzIruoz+EDVnLdBASXK9BHagmD5oK2BJ4KcqpWVgljsty8bAlpbQROyRLr/wwSfumPbRZ+4rO33HWsza/wYmHG3FhM427Z8j8wDza8xEqS9WtuMnE9rgGDhkgjo/ktEkxMoPAbvUqlWrjkAgolubBAdB0g4x71x97zMA0hqpE7RbR5JKxl9zz8BxWrjJmTcDQ6FGJwWq5ux9FfzPGA5VT8eGxZ8xJg1ZfIojiO+N24uzvVFzx/5DgKtOU/Rmvei+vr5BtR0Mxr+2ueoz6gvwcdtg27bacWP7ucraUuhcCGXLF/8EaF4yhSD9riHeDEvfU1WVl9LJYertt39rzh133M1+oFKCpRkYJewNLr9ARIlubQzVVAxkVTYxUOYf9Uoqfb36INZN3RlnXq5OCUKE4rbL/KMezD+Z/VtHQ656dDr9mYu+0Pl6u/ZzaBGQiHQvFgkNkYgz8B2r7voLkP6WTTWk8jI6bTDBwMZ9b2neDAzgjbQ9YN+2ytAd5QhQuwBuf3rqjvu/WX0ILnZ1mRTkQN5WX0k1IcFmdjQJsVIGaieYRsDpldJ6gBAUd6zGR64A2H9bSiASl6YkRhNyMrAQLMSKBWM8lmgykvH2QGc4GLnc22RFucjYhkEWeEaG+KxzRs20totq7qyvCv8HkdifrqwU6ISkyfQlzfcxqw3m+49V8fTAutD51jPc5Yz91vuvC65YeDUW/+k4DPbZ2Hj3QQGRopVFguLLNQCr7rr3bxB4ObU9uqixsbEiNd2iY/fGxsa8GZg7d/stN52nqHwNKPEBdYLXvTJfJ3q9+Vss8X2GC90DWOrtwbKynr/MnbvkY8YBi7rz+vrbXvquI9yf4hRLkIoS6odcltdNGMZm4HLHlavLykpRWho3L0wgPAZe2I2Oa+iNto4BJAbfRRK0AYTjjTUZZ+BYuiSuhUIvxt4jETk00Hs5gP9NSi/szQzJlSe/3/GDe1gxe2lyOr/P2HD7h2SiRxXw9QzZgywQnuHwO6Y5g5jp9OMkt0/b15ZLkfMgWRa/TFeDr3TmPysCbWHy9yR8+ZhW7TsIuXzwDGxs15ZCG9EY23FJiKdVoq8ZUTDugfX0Vavu+ddtN9/0GyK6Sk/jpwp8ZLAMPHQbVQCtF1b/jbfDv3lrz0NlEl0liKS9YfkP97aX/goySAqL/rCEow5Sj+xoeIMdx19tHKAeJ6L98vSY3b+eHH9Wz/bjwGtl+tm2nkG+TlA4AOGweMG3XkH0aWTa0XQOnDRM+9UiAuUkb+xGmGcYwwSl+VhOqYkk501QQh8DEu5IWp7uupWce2CDAUPey+eUHmZJuOrEqdecWhLafoo31HTtwilXt15Uvbn1/OotzRdXbd19YVVz80U1fGnU/IxVCHG3EOdl1I8UTq8qVabXJVH7Bn8mbBRcGeMZ+2tnjAkEblm9uhsCms9yfcAsqtHjxueqVasOC0G3GdP4qtIj7ftTpNEpS8mkQvyqM67+TEMyzEmEEzT/76nNdrk95T9PTY6k8BmtoiiSVD4FYGZNUiBReg6AyuozFTeVbvTsz4KhsH45m6nSNlGxI0BEbjVPXUsB/J2A8w1jzDiB3vmDe37yHzff9CkCTtfpibRl9F/1d36aYWCdfvgYWIDvGY1Lg/QesElj83PTgxSMOaUzZAGC7hf1izMaTdTX1+84cODA+yRJkr3CtcSFIDvuioewDwMH3v6U3z1xezzRWuxfL77A593f41Lbtr2+fNGixWkl39ZqtamLBQFFUbrq6+vjigMWOiY5xd+VIMXvDcvwG+cq+Vjptttu+hLCxFpP2kzNuhSNjY2uxsbGmLaQaQZmzxwW+po3aVtLEw9wHrvi2dPSsnRqQ0OCRwJFCs1DOt1loqDL64h508zUgUmTJunMuS3QtPligFg4EAvu4NEzK6ct/EMswWLktlu+dYpe5MUXN7++bNllbO9pBxsB3HHHPS23rryRnUJG77jNPoF+//v3bLtt5U33EOjmKHzlgYFePhNmeZEWMk7hOoH+TPDMoScOwZMMwikVlCKoCqupKmncDSHhITHpnMNWuuQSzhtASPB5IgQ+Q7Q17exvqu4EpweDUnwx1ZxNdGwhIAR+rfeYTNyQN3HKtO8A0CcdLppgtZSbgXVFDjYrHIYgDOfDBHVGcpOCKFWARQg5JUdG97LJdejvYuZZbRB0j/4efVYFW3svS0oz/WoQ+nGZYcHMdOdswhFHwOUpZwbWJg1J5HaU/o1vfCMAWWNafd35idWrV8auHs3JwEI34tfMCkd8/DzXpiiFkyQeFjPOyesyKdfMCY2EpAubVCScweU76sEovuTbpl2uuBFobGzsgoBmmKCCZpvp7apV97I10++itKK7U/0PvVxOBtYJ8/HGES9bwBilHCEpbpLvzLcFIeYHZZK+kFCesIJaNpm63jGhXOLLkJ6bJzZlvx0rCLCrWEFCjfY343Fn8njGT5z8FT2NVFqux00zcJJOtF5+WJ+0b8tUCCRJoOk3YtbZsZsk8umQc/a5GyHwp1hZAWeI8OnYe34Re/mcH26jslRj47cm3rbyxp8GBnr3EuhEHqRAdq+UOhCNjY1Sx8H9EUGWQB8EYkJW0wyctLfT6x7WZzioJu1/SXXBmdFIwkrnXJJ8PUCxI6hkVTazdVl1/Ge2Xpvu2EYg5KMzCGI+IF4CxBYIbJQF3WVmVMFg3zwCzRUC17k95ZNXrb73B3q53MdIcZc6Iz6jKKqYx5ecxYP0x8HOvnpdvIcONG++E0TR5bg4nVq3NIgZ5/IFVRZCzPxyxPGy0GmbdIgRuHP1PezXKqNvq2zNf//797BX10+kozEzA0d+iLo0Ol0tw5QmElQoSXU55G8XsmlXw+R7jQKtoKJ8aRD12ww8CPDsouYQMMPAWk0xabS5eoeGioxnwNIfxfSzmwvZkBBzAjLJ7NtHm+aJxFVEFDfwtdDYcCm+WOiSTToKETDNwEM5diKS2tqa3t/W0hRb23N7EsRM1saiuO8gbfOv9YXI8rmvmTE4Z5/zHEj8lmmFwORw8yaj7qqZKiLd04/fTJewCW0ErCOQew+s11ngc+AjR45U9PV1XwJSL9/d2rwCQLXelP4kYCpB3bS7tblrX8s7W6Du1yTQBLGxZPbSIbvtweVy3BoMhT4KoFQlic+E07pE0ftpfEZ8ZyssYrSX0EZg7PiQIJBzBiZROKFMW1vbzLaWpm+2NTet7+3u7IBKj4DElemYN2m0VRKFYk7xukV13e7W5hsPtrY2JNEV5FVMe/9+IhEx5xL0cWrZxPcQmwox39kF/uCZatwmGnMI5GRgRH+IBka2DFJra/PtbS1Nb0ENNwH4EQQuFILvHNUcQO4EaVom10Gi90sOl3d6wyzhdHvGS5CWCiG+TsCDbhHgslAgwy/KTiSiewKkNLe2NL2zu3XX3fuamxPclVjuZFIB9yx6gEB8f2tJUBUrk7JNvMY+fCZobRIbgfwQGPIl9O7m5ouJ6L8i3aMmQNpKAltlElvdpaVb6+rq0jpirq+v7wA0A2jNCDrYtPk5AmbJAr+DhF9DxXwImi8IJ6oqrlFBHyeiOUKImKlVfpBESrFTgGd3vO47ydkNt1C+E2za1O6adV6i+WGWBopB8SVL9+ysUYKAaQaW8hDKtLU0XUdQryIhHqyowK01NbPZm0ZegRAxYnDJ+Nn06bOeA7BBr2h3S8uHCLRyd1vz/wAomIf4FwO1LY/7p0yZ4+iRFzm7HuxqegZVs84xxcTFoPii42M/Ry8CuZfQ0bGTxatFo8V+CIhFgvCVmppZeTOv3gV+BkPha4K7Nl1N7ZtiKpUqlOsAWgLCp/e2tOS8kjFaX87HTSdPPc/jqq2CkL+3JVDXdnfvCT99eHvbtdkKGq6fsYVY2YCy8wqCQM4ZmGdeTfM6wc7VXNsE2iIgzuWnuRLpqfgY6brXOnXjAhZ6XVnRF+KZUBMuCQg2+j+XgO4pDQ0Zr3NMX3v21Mb5gpf4bJP5ncb3qKItO7l2/UyArcWKQPElR1ft7FGAQE4Gdnqlv4X9tNNRQpaPbWY0zF56oKVlxqSGhtbBYCWEUJ7aseOSbnLETAkVWeJltBamN8xqPNDS8qvBtqPXl+nZOEf0ZMqLpZeUHJT94fMccOyNpdkRGwEbARsBGwEbgWQE/g+sx9zSMp5pzAAAAABJRU5ErkJggg==';
