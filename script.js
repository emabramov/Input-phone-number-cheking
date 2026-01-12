document.addEventListener("DOMContentLoaded", function() {
	const log = console.log;
	var eventCallback = function(e) {
		var el = e.target,
			clearVal = el.dataset.phoneClear,
			pattern = el.dataset.phonePattern,
			matrix_def = "+7(___) ___-__-__",
			matrix = pattern ? pattern : matrix_def,
			i = 0,
			def = matrix.replace(/\D/g, ""),
			val = e.target.value.replace(/\D/g, "");
		if (clearVal !== 'false' && e.type === 'blur') {
			if (val.length < matrix.match(/([\_\d])/g).length) {
				e.target.value = '';
				return;
			}
		}
		if (def.length >= val.length) val = def;
		e.target.value = matrix.replace(/./g, function(a) {
			return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? "" : a
		});
	}

	var phone_inputs = document.querySelectorAll('input.phone');
	
 	for (let elem of phone_inputs) {
 		for (let ev of ['input', 'blur', 'focus', 'click']) {
 			elem.addEventListener(ev, eventCallback);
 		}
  	}

	// Wait for element in body
	function waitForElementToExist(selector) {
	  return new Promise(resolve => {
	    if (document.querySelector(selector)) {
	      return resolve(document.querySelector(selector));
	    }
	
	    const observer = new MutationObserver(() => {
	      if (document.querySelector(selector)) {
	        resolve(document.querySelector(selector));
	        observer.disconnect();
	      }
	    });
	
	    observer.observe(document.body, {
	      subtree: true,
	      childList: true,
	    });
	  });
	}

	// Apply function to new elements
	async function doWork() {
	  	const element = await waitForElementToExist('# expected-element');
	  	var phone_inputs = document.querySelectorAll('input.phone');
	 	for (let elem of phone_inputs) {
	 		for (let ev of ['input', 'blur', 'focus', 'click']) {
	 			elem.addEventListener(ev, eventCallback);
	 		}
	    }
	}
	doWork();
});
