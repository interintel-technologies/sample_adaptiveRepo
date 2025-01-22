import { SearchInputBase } from "../../base/elements/search-input";
import { InputMixin } from "../../base/mixins/InputMixin";

class SearchInput extends InputMixin(SearchInputBase){
    get type() {
		return 'search';
	}
}
customElements.define(SearchInput.is,SearchInput);