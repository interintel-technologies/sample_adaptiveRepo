import { css, html,unsafeCSS } from 'lit-element';
import { QuickLinksStyles } from './quick-links-css';
import { SectionPElementBase } from '../../base/elements/section-pelement';
import globalStyles from '../../App.css?raw'
class QuickLinks extends SectionPElementBase {

    static get styles () {
        return [unsafeCSS(globalStyles),QuickLinksStyles]
    }

    static get is() {
        return "quick-links";
    }

    render() {
        return html`
            <div class="content">
                <h3>${this.e.name}</h3>
                <div class="quick-links-container columns is-flex px-3">
                    ${this.pageGroup.pages.map((page, index) => {
                        return html`
                            <div class="column">
                                <a href="${window.location.pathname + window.location.search}#/${this.pageGroupIndex}/${index}/">
                                    <div class="card column quick-cards">
                                        <div class="icon card-icon">
                                            <adaptive-ui-icon icon=${page.icon || 'icons:info'}></adaptive-ui-icon>
                                        </div>
                                        <div class="media-content mt-3">
                                            <h4 class="card-title has-text-centered">${page.title}</h4>
                                            <!-- <p>Deposit money into your account and use for various purposes</p> -->
                                        </div>
                                    </div>
                                </a>
                            </div>
                        `;
                    })}
                </div>
            </div>
        `;
    } 
}

customElements.define(QuickLinks.is,QuickLinks);