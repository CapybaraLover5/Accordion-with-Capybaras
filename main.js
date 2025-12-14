const accordionHeaders = document.querySelectorAll(".accordion-item__header");

accordionHeaders.forEach(function (i) {
  i.addEventListener("click", function () {
    /* Find the closest accordion item (the parent container for the header and content),
       and toggle the "accordion__item--active" class, which makes the content visible
       due to the CSS associated with this class. */
    const accordionItem = this.closest(".accordion__item");
    accordionItem.classList.toggle("accordion__item--active");

    /* Find the corresponding accordion content within the same item */
    const accordionContent = accordionItem.querySelector(
      ".accordion-item__content"
    );
    /* Check whether the accordion item has the "accordion__item--active" class,
       store the boolean result in the "isActive" variable, and use it to update
       the ARIA attributes accordingly (so they reflect whether the content is open). */
    const isActive = accordionItem.classList.contains(
      "accordion__item--active"
    );
    this.setAttribute("aria-expanded", isActive);
    accordionContent.setAttribute("aria-hidden", !isActive); // the "!" negates isActive
  });
});
