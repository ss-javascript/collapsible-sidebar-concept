/**
 * This component uses Vanilla JS and not jQuery.
 * Why? Don't know. Sometimes, I like to have fun.
 **/

(function(){

	function SthCollapsibleMenu(buttonElemId, menuElemId, menuWidth)
	{
		var self = this;
		self._button;
		self._menu;

		function setButtonId(elementId)
		{
			self._button = document.getElementById(elementId);

			if(!self._button || self._button.length < 1)
			{
				throw new Error("There is not any element available on DOM which uses the given button id.");
				self._button = undefined;
			}

			return self;
		}

		function setMenuId(elementId)
		{
			self._menu = document.getElementById(elementId);

			if(!self._menu || self._menu.length < 1)
			{
				throw new Error("There is not any element available on DOM which uses the given menu id.");
				self._menu = undefined;
			}

			return self;
		}

		function init(){
			validateRequiredProperties();
			createButtonElemListener();
		}

		function validateRequiredProperties()
		{
			if(!self._button)
				throw new Error("SthCollapsibleMenu needs an id which represents the menu button element. Use #setButtonId(elementId) method.");

			if(!self._menu)
				throw new Error("SthCollapsibleMenu needs an id which represents the menu element. Use #setMenuId(elementId) method.");
		}

		function createButtonElemListener()
		{
			self._button.addEventListener("click", function(){
				toggleMenuPanel();
			});
		}

		function toggleMenuPanel()
		{
			console.log("Element clicked");
		}

		return {
			setButtonId: setButtonId,
			setMenuId: setMenuId,
			init: init
		};
	}

	window.SthCollapsibleMenu = SthCollapsibleMenu;

})();