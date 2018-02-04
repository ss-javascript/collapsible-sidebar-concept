/**
 * This component uses Vanilla JS and not jQuery.
 * Why? Don't know. Sometimes, I like to have fun.
 **/

(function(){

	function SthCollapsibleMenu(buttonElemId, menuElemId, menuWidth)
	{
		var CLASS_MENU_OPEN = "open";
		var self = this;
		self._button;
		self._menu;
		self._content;

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

		function setContentId(elementId)
		{
			self._content = document.getElementById(elementId);

			if(!self._content || self._content.length < 1)
			{
				throw new Error("There is not any element available on DOM which uses the given content id.");
				self._content = undefined;
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

			if(!self._content)
				throw new Error("SthCollapsibleMenu needs an id which represents the content element. Use #setContentId(elementId) method.");
		}

		function createButtonElemListener()
		{
			self._button.addEventListener("click", function(){
				toggleMenuPanel();
			});
		}

		function toggleMenuPanel()
		{
			if(isMenuOpen()) closeMenuPanel();
			else openMenuPanel();
		}

		function isMenuOpen()
		{
			var classes = self._menu.className.split(" ");
			return classes.some(function(className){
				return className == CLASS_MENU_OPEN;
			});
		}

		function closeMenuPanel()
		{
			removeOpenClassesFromMenu();
			moveContentToLeft();
		}

		function removeOpenClassesFromMenu()
		{
			var classes = self._menu.className.split(" ");
			if(classes.length < 1) return true;

			classes = classes.filter(function(className){
				return className != CLASS_MENU_OPEN;
			});

			self._menu.className = classes.join(" ");
		}

		function moveContentToLeft()
		{
			self._content.style.marginLeft = 0;
			self._content.style.marginRight = 0;
			self._content.style.transform = "scale(1)";
		}

		function openMenuPanel()
		{
			addOpenClassesOnMenu();
			moveContentToRight();
		}

		function addOpenClassesOnMenu()
		{
			var classes = self._menu.className.split(" ");
			classes.push("open");
			self._menu.className = classes.join(" ");
		}

		function moveContentToRight()
		{
			self._content.style.marginLeft = "200px";
			self._content.style.marginRight = "-200px";
			self._content.style.transform = "scale(0.8)";
		}

		return {
			setButtonId: setButtonId,
			setMenuId: setMenuId,
			setContentId: setContentId,
			init: init
		};
	}

	window.SthCollapsibleMenu = SthCollapsibleMenu;

})();; 
(function(){

	var sthCollapsibleMenu = (new SthCollapsibleMenu());
		sthCollapsibleMenu.setButtonId("menu-button");
		sthCollapsibleMenu.setMenuId("menu-panel");
		sthCollapsibleMenu.setContentId("page-content");
		sthCollapsibleMenu.init();
		
})();