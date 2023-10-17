function generateHTML(value) {
    const html = `
    <section>
    <div class="container px-5 py-24 mx-auto flex flex-wrap ">
        <div class="w-full mx-auto">
            <div class="flex w-4/5 justify-center mx-auto ">
                    <div class="w-1/5 flex items-center relative">
                        <div class="h-1 w-full  absolute  ">
                            <div class=" bg-red-500 h-1 w-full bg-gray-200 "></div>
                            <h3 class="pt-6">Model</h3>
                        </div>
                        <div class="w-6 h-6 bg-white relative rounded-full border-[6px] border-red-500"></div>         
                    </div>
                    <div class="w-1/5 flex items-center relative">
                        <div class="h-1 w-full  absolute  ">
                            <div class="  h-1 w-full bg-gray-200 "></div>
                            <h3 class="pt-6">Repair</h3>
                        </div>
                        <div class="w-6 h-6 bg-white relative rounded-full border-[6px] border-red-500"></div>
                    </div>
                    <div class="w-1/5 flex items-center relative">
                        <div class="h-1 w-full  absolute  ">
                            <div class="  h-1 w-full bg-gray-200 "></div>
                            <h3 class="pt-6">Review</h3>
                        </div>
                        <div class="w-6 h-6 bg-white relative rounded-full border-[6px] border-red-500"></div>
                    </div>
                    <div class="w-1/5 flex items-center relative">
                        <div class="h-1 w-full  absolute  ">
                            <div class="  h-1 w-full bg-gray-200 "></div>
                            <h3 class="pt-6">Pay</h3>
                        </div>
                        <div class="w-6 h-6 bg-white relative rounded-full border-[6px] border-red-500"></div>
                    </div>
                    <div class="w-1/5 flex items-center relative">
                        <div class="h-1 w-full  absolute  ">
                            <h3 class="pt-6">Complete</h3>
                        </div>
                        <div class="w-6 h-6 bg-white relative rounded-full border-[6px] border-red-500"></div>
                    </div>   
            </div>
        </div>
    </div>
  </section>
    `;
    return html;
  

 
}

// Sử dụng hàm để lấy đoạn mã HTML
const myHTML = generateHTML(2);

// In ra kết quả

let a = document.querySelector(".a")
a.innerHTML = myHTML