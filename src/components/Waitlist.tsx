import { useState, useEffect } from "react";
import { LeftIcon, RightIcon, WaitlistTab } from "../assets/icons";
import SendIcon from "../assets/send.svg";

const questions = [
  "What's your name?",
  "Where are you based?",
  "What's your number?",
  "What's your email?",
  "How would you describe your creative work?",
  "Do you share creative work with teammates?",
  "How many people on your team?",
  "How does your team communicate?",
  "How much do you love using your messenger?",
];

interface FormData {
  name: string;
  location: string;
  countryCode: string;
  phone: string;
  email: string;
  creativeWork: string;
  sharingFrequency: string;
  teamSize: string;
  mainMessenger: string;
  mainMessengerFeelings: string;
  timestamp: string;
}

interface WaitlistProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

function Waitlist({ open, setOpen }: WaitlistProps) {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState<FormData>({
    name: "",
    location: "",
    countryCode: "+1",
    phone: "",
    email: "",
    creativeWork: "",
    sharingFrequency: "",
    teamSize: "",
    mainMessenger: "",
    mainMessengerFeelings: "",
    timestamp: "",
  });

  // Disable scrolling when the waitlist is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // The send button alternative: advances to the next step (or submits on the final step)
  const handleSendClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (step < questions.length) {
      setStep(step + 1);
    } else {
      handleSubmit();
    }
  };

  // Basic form validation; adjust as needed
  const isFormValid = (): boolean => {
    if (
      !formData.name.trim() ||
      !formData.location.trim() ||
      !formData.phone.trim() ||
      !formData.email.trim() ||
      !formData.creativeWork.trim() ||
      !formData.sharingFrequency.trim() ||
      !formData.teamSize.trim() ||
      !formData.mainMessenger.trim() ||
      !formData.mainMessengerFeelings.trim()
    ) {
      alert("Please complete all fields before submitting.");
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert("Please enter a valid email address.");
      return false;
    }
    const digitsOnly = formData.phone.replace(/\D/g, "");
    if (digitsOnly.length < 10 || digitsOnly.length > 11) {
      alert("Please enter a valid phone number.");
      return false;
    }
    return true;
  };

  const handleSubmit = async () => {
    if (!isFormValid() || isSubmitting) return;

    setIsSubmitting(true);
    const submissionTime = new Date().toLocaleString("en-US", {
      timeZone: "America/New_York",
    });
    const updatedFormData = { ...formData, timestamp: submissionTime };
    setFormData(updatedFormData);

    try {
      const apiSpreadsheetResponse = await fetch(
        "https://api.apispreadsheets.com/data/YQsYtTDnhKMD8FY4/",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ data: updatedFormData }),
        }
      );

      const formBody = new URLSearchParams();
      Object.entries(updatedFormData).forEach(([key, value]) => {
        formBody.append(key, value);
      });

      const loopsResponse = await fetch(
        "https://app.loops.so/api/newsletter-form/clthgzdpx01ocs9ncfitd5mwv",
        {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: formBody,
        }
      );

      if (apiSpreadsheetResponse.status === 201 && loopsResponse.ok) {
        console.log("Form submitted successfully to both endpoints");
        setOpen(false);
      } else {
        console.error("Form submission failed");
        alert(
          "There was a problem submitting your information. Please try again."
        );
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("There was an error submitting the form.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Render the current step's input integrated with the send button
  const renderStepInput = () => {
    switch (step) {
      case 1:
        return (
          <div className="relative w-full">
            <input
              type="text"
              name="name"
              placeholder="Type your name"
              className="w-full rounded-3xl bg-white p-2 px-4 pr-12 text-primary placeholder:text-primary outline-none"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
            {formData.name && (
              <button
                onClick={handleSendClick}
                className="absolute inset-y-0 right-0 flex items-center pr-3 bg-transparent border-0 cursor-pointer"
              >
                <img src={SendIcon} alt="Send" className="w-5 h-auto" />
              </button>
            )}
          </div>
        );
      case 2:
        return (
          <div className="relative w-full">
            <input
              type="text"
              name="location"
              placeholder="What city are you in?"
              className="w-full rounded-3xl bg-white p-2 px-4 pr-12 text-primary placeholder:text-primary outline-none"
              value={formData.location}
              onChange={handleInputChange}
              required
            />
            {formData.location && (
              <button
                onClick={handleSendClick}
                className="absolute inset-y-0 right-0 flex items-center pr-3 bg-transparent border-0 cursor-pointer"
              >
                <img src={SendIcon} alt="Send" className="w-5 h-auto" />
              </button>
            )}
          </div>
        );
      case 3:
        return (
          <div className="flex gap-3 items-center">
            <select
              name="countryCode"
              className="rounded-3xl bg-white p-2 px-4 text-primary placeholder:text-primary outline-none"
              value={formData.countryCode}
              onChange={handleInputChange}
              required
            >
              <option value="+1">🇺🇸 +1</option>
              <option value="+1CA">🇨🇦 +1</option>
              <option value="+44">🇬🇧 +44</option>
              <option value="+61">🇦🇺 +61</option>
              <option value="+81">🇯🇵 +81</option>
              <option value="+82">🇰🇷 +82</option>
              <option value="+65">🇸🇬 +65</option>
              <option value="+971">🇦🇪 +971</option>
              <option value="+355">🇦🇱 +355</option>
              <option value="+376">🇦🇩 +376</option>
              <option value="+374">🇦🇲 +374</option>
              <option value="+43">🇦🇹 +43</option>
              <option value="+994">🇦🇿 +994</option>
              <option value="+375">🇧🇾 +375</option>
              <option value="+32">🇧🇪 +32</option>
              <option value="+387">🇧🇦 +387</option>
              <option value="+359">🇧🇬 +359</option>
              <option value="+385">🇭🇷 +385</option>
              <option value="+357">🇨🇾 +357</option>
              <option value="+420">🇨🇿 +420</option>
              <option value="+45">🇩🇰 +45</option>
              <option value="+372">🇪🇪 +372</option>
              <option value="+358">🇫🇮 +358</option>
              <option value="+33">🇫🇷 +33</option>
              <option value="+995">🇬🇪 +995</option>
              <option value="+30">🇬🇷 +30</option>
              <option value="+36">+36</option>
              <option value="+354">🇮🇸 +354</option>
              <option value="+353">🇮🇪 +353</option>
              <option value="+39">🇮🇹 +39</option>
              <option value="+7">🇰🇿 +7</option>
              <option value="+371">🇱🇻 +371</option>
              <option value="+423">🇱🇮 +423</option>
              <option value="+370">🇱🇹 +370</option>
              <option value="+352">🇱🇺 +352</option>
              <option value="+389">🇲🇰 +389</option>
              <option value="+356">🇲🇹 +356</option>
              <option value="+373">🇲🇩 +373</option>
              <option value="+377">🇲🇨 +377</option>
              <option value="+382">🇲🇪 +382</option>
              <option value="+31">🇳🇱 +31</option>
              <option value="+47">🇳🇴 +47</option>
              <option value="+48">🇵🇱 +48</option>
              <option value="+351">🇵🇹 +351</option>
              <option value="+40">🇷🇴 +40</option>
              <option value="+7">🇷🇺 +7</option>
              <option value="+381">🇷🇸 +381</option>
              <option value="+421">🇸🇰 +421</option>
              <option value="+386">🇸🇮 +386</option>
              <option value="+34">🇪🇸 +34</option>
              <option value="+46">🇸🇪 +46</option>
              <option value="+41">🇨🇭 +41</option>
              <option value="+90">🇹🇷 +90</option>
              <option value="+380">🇺🇦 +380</option>
              <option value="+39">🇻🇦 +39</option>
              <option value="+54">🇦🇷 +54</option>
              <option value="+591">🇧🇴 +591</option>
              <option value="+55">🇧🇷 +55</option>
              <option value="+56">🇨🇱 +56</option>
              <option value="+57">🇨🇴 +57</option>
              <option value="+593">🇪🇨 +593</option>
              <option value="+592">🇬🇾 +592</option>
              <option value="+595">🇵🇾 +595</option>
              <option value="+51">🇵🇪 +51</option>
              <option value="+597">🇸🇷 +597</option>
              <option value="+598">🇺🇾 +598</option>
              <option value="+58">🇻🇪 +58</option>
              <option value="+93">🇦🇫 +93</option>
              <option value="+374">🇦🇲 +374</option>
              <option value="+994">🇦🇿 +994</option>
              <option value="+973">🇧🇭 +973</option>
              <option value="+880">🇧🇩 +880</option>
              <option value="+975">🇧🇹 +975</option>
              <option value="+673">🇧🇳 +673</option>
              <option value="+95">🇲🇲 +95</option>
              <option value="+855">🇰🇭 +855</option>
              <option value="+86">🇨🇳 +86</option>
              <option value="+357">🇨🇾 +357</option>
              <option value="+995">🇬🇪 +995</option>
              <option value="+91">🇮🇳 +91</option>
              <option value="+62">🇮🇩 +62</option>
              <option value="+98">🇮🇷 +98</option>
              <option value="+964">🇮🇶 +964</option>
              <option value="+972">🇮🇱 +972</option>
              <option value="+81">🇯🇵 +81</option>
              <option value="+962">🇯🇴 +962</option>
              <option value="+7">🇰🇿 +7</option>
              <option value="+965">🇰🇼 +965</option>
              <option value="+996">🇰🇬 +996</option>
              <option value="+856">🇱🇦 +856</option>
              <option value="+961">🇱🇧 +961</option>
              <option value="+60">🇲🇾 +60</option>
              <option value="+960">🇲🇻 +960</option>
              <option value="+976">🇲🇳 +976</option>
              <option value="+977">🇳🇵 +977</option>
              <option value="+850">🇰🇵 +850</option>
              <option value="+968">🇴🇲 +968</option>
              <option value="+92">🇵🇰 +92</option>
              <option value="+63">🇵🇭 +63</option>
              <option value="+974">🇶🇦 +974</option>
              <option value="+966">🇸🇦 +966</option>
              <option value="+65">🇸🇬 +65</option>
              <option value="+82">🇰🇷 +82</option>
              <option value="+94">🇱🇰 +94</option>
              <option value="+963">🇸🇾 +963</option>
              <option value="+992">🇹🇯 +992</option>
              <option value="+66">🇹🇭 +66</option>
              <option value="+90">🇹🇷 +90</option>
              <option value="+993">🇹🇲 +993</option>
              <option value="+971">🇦🇪 +971</option>
              <option value="+998">🇺🇿 +998</option>
              <option value="+84">🇻🇳 +84</option>
              <option value="+967">🇾🇪 +967</option>
              <option value="+213">🇩🇿 +213</option>
              <option value="+244">🇦🇴 +244</option>
              <option value="+229">🇧🇯 +229</option>
              <option value="+267">🇧🇼 +267</option>
              <option value="+226">🇧🇫 +226</option>
              <option value="+257">🇧🇮 +257</option>
              <option value="+238">🇨🇻 +238</option>
              <option value="+237">🇨🇲 +237</option>
              <option value="+236">🇨🇫 +236</option>
              <option value="+235">🇹🇩 +235</option>
              <option value="+269">🇰🇲 +269</option>
              <option value="+243">🇨🇩 +243</option>
              <option value="+253">🇩🇯 +253</option>
              <option value="+20">🇪🇬 +20</option>
              <option value="+240">🇬🇶 +240</option>
              <option value="+291">🇪🇷 +291</option>
              <option value="+251">🇪🇹 +251</option>
              <option value="+241">🇬🇦 +241</option>
              <option value="+220">🇬🇲 +220</option>
              <option value="+233">🇬🇭 +233</option>
              <option value="+224">🇬🇳 +224</option>
              <option value="+245">🇬🇼 +245</option>
              <option value="+225">🇨🇮 +225</option>
              <option value="+254">🇰🇪 +254</option>
              <option value="+266">🇱🇸 +266</option>
              <option value="+231">🇱🇷 +231</option>
              <option value="+218">🇱🇾 +218</option>
              <option value="+261">🇲🇬 +261</option>
              <option value="+265">🇲🇼 +265</option>
              <option value="+223">🇲🇱 +223</option>
              <option value="+222">🇲🇷 +222</option>
              <option value="+230">🇲🇺 +230</option>
              <option value="+212">🇲🇦 +212</option>
              <option value="+258">🇲🇿 +258</option>
              <option value="+264">🇳🇦 +264</option>
              <option value="+227">🇳🇪 +227</option>
              <option value="+234">🇳🇬 +234</option>
              <option value="+242">🇨🇬 +242</option>
              <option value="+250">🇷🇼 +250</option>
              <option value="+239">🇸🇹 +239</option>
              <option value="+221">🇸🇳 +221</option>
              <option value="+248">🇸🇨 +248</option>
              <option value="+232">🇸🇱 +232</option>
              <option value="+252">🇸🇴 +252</option>
              <option value="+27">🇿🇦 +27</option>
              <option value="+211">🇸🇸 +211</option>
              <option value="+249">🇸🇩 +249</option>
              <option value="+255">🇹🇿 +255</option>
              <option value="+228">🇹🇬 +228</option>
              <option value="+216">🇹🇳 +216</option>
              <option value="+256">🇺🇬 +256</option>
              <option value="+260">🇿🇲 +260</option>
              <option value="+263">🇿🇼 +263</option>
            </select>
            <div className="relative w-full">
              <input
                type="text"
                name="phone"
                placeholder="123 123 1234"
                className="w-full rounded-3xl bg-white p-2 px-4 pr-12 text-primary placeholder:text-primary outline-none"
                value={formData.phone}
                onChange={handleInputChange}
                required
              />
              {formData.phone && (
                <button
                  onClick={handleSendClick}
                  className="absolute inset-y-0 right-0 flex items-center pr-3 bg-transparent border-0 cursor-pointer"
                >
                  <img src={SendIcon} alt="Send" className="w-5 h-auto" />
                </button>
              )}
            </div>
          </div>
        );
      case 4:
        return (
          <div className="relative w-full">
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="w-full rounded-3xl bg-white p-2 px-4 pr-12 text-primary placeholder:text-primary outline-none"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
            {formData.email && (
              <button
                onClick={handleSendClick}
                className="absolute inset-y-0 right-0 flex items-center pr-3 bg-transparent border-0 cursor-pointer"
              >
                <img src={SendIcon} alt="Send" className="w-5 h-auto" />
              </button>
            )}
          </div>
        );
      case 5:
        return (
          <div className="relative w-full">
            <input
              type="text"
              name="creativeWork"
              placeholder="What do you create?"
              className="w-full rounded-3xl bg-white p-2 px-4 pr-12 text-primary placeholder:text-primary outline-none"
              value={formData.creativeWork}
              onChange={handleInputChange}
              required
            />
            {formData.creativeWork && (
              <button
                onClick={handleSendClick}
                className="absolute inset-y-0 right-0 flex items-center pr-3 bg-transparent border-0 cursor-pointer"
              >
                <img src={SendIcon} alt="Send" className="w-5 h-auto" />
              </button>
            )}
          </div>
        );
      case 6:
        return (
          <div className="relative w-full">
            <select
              name="sharingFrequency"
              className="w-full rounded-3xl bg-white p-2 px-4 pr-12 appearance-none text-primary placeholder:text-primary outline-none"
              value={formData.sharingFrequency}
              onChange={handleInputChange}
              required
            >
              <option value="">Select frequency</option>
              <option value="really often">
                Yes, really often (+10 times a week)
              </option>
              <option value="somewhat often">
                Yes, somewhat often (a few times a week)
              </option>
              <option value="rarely">
                Yes but not that often (once a week or less)
              </option>
              <option value="Never">No, never (0 times a week)</option>
            </select>
            {formData.sharingFrequency && (
              <button
                onClick={handleSendClick}
                className="absolute inset-y-0 right-0 flex items-center pr-3 bg-transparent border-0 cursor-pointer"
              >
                <img src={SendIcon} alt="Send" className="w-5 h-auto" />
              </button>
            )}
          </div>
        );
      case 7:
        return (
          <div className="relative w-full">
            <select
              name="teamSize"
              className="w-full rounded-3xl bg-white p-2 px-4 pr-12 appearance-none text-primary placeholder:text-primary outline-none"
              value={formData.teamSize}
              onChange={handleInputChange}
              required
            >
              <option value="">Select team size</option>
              <option value="1">Just me</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10+">10+</option>
            </select>
            {formData.teamSize && (
              <button
                onClick={handleSendClick}
                className="absolute inset-y-0 right-0 flex items-center pr-3 bg-transparent border-0 cursor-pointer"
              >
                <img src={SendIcon} alt="Send" className="w-5 h-auto" />
              </button>
            )}
          </div>
        );
      case 8:
        return (
          <div className="relative w-full">
            <select
              name="mainMessenger"
              className="w-full rounded-3xl bg-white p-2 px-4 pr-12 appearance-none text-primary placeholder:text-primary outline-none"
              value={formData.mainMessenger}
              onChange={handleInputChange}
              required
            >
              <option value="">Select a messenger</option>
              <option value="iMessage">iMessage</option>
              <option value="WhatsApp">WhatsApp</option>
              <option value="Slack">Slack</option>
              <option value="Discord">Discord</option>
              <option value="Telegram">Telegram</option>
              <option value="Instagram">Instagram</option>
            </select>
            {formData.mainMessenger && (
              <button
                onClick={handleSendClick}
                className="absolute inset-y-0 right-0 flex items-center pr-3 bg-transparent border-0 cursor-pointer"
              >
                <img src={SendIcon} alt="Send" className="w-5 h-auto" />
              </button>
            )}
          </div>
        );
      case 9:
        return (
          <div className="relative w-full">
            <select
              name="mainMessengerFeelings"
              className="w-full rounded-3xl bg-white p-2 px-4 pr-12 appearance-none text-primary placeholder:text-primary outline-none"
              value={formData.mainMessengerFeelings}
              onChange={handleInputChange}
              required
            >
              <option value="">Select an answer</option>
              <option value="I hate it">👎 I hate it.</option>
              <option value="It does the job">🤷 It does the job.</option>
              <option value="I love it">❤️ I love it.</option>
            </select>
            {formData.mainMessengerFeelings && (
              <button
                onClick={handleSendClick}
                className="absolute inset-y-0 right-0 flex items-center pr-3 bg-transparent border-0 cursor-pointer"
              >
                <img src={SendIcon} alt="Send" className="w-5 h-auto" />
              </button>
            )}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div
      className={`flex flex-col items-center mt-2 bottom-0 right-0 left-0 sticky ${
        open ? "bg-white" : ""
      } z-50`}
    >
      <WaitlistTab
        open={open}
        onClick={() => setOpen(!open)}
        style={{ cursor: "pointer", width: "300px", height: "60px" }}
      />
      {open && (
        <div className="bg-[#EBEBEB] w-full pt-8 p-4 min-h-[80vh] flex justify-center items-center md:min-h-fit">
          <div className="max-w-sm w-full mx-auto flex flex-col items-center gap-4 px-2">
            <p className="text-[#7E7E7E] font-medium">
              Question {step} of {questions.length}
            </p>
            <div className="flex justify-between items-center w-full">
              <LeftIcon
                className={`cursor-pointer ${step === 1 && "opacity-20"}`}
                onClick={() => step > 1 && setStep(step - 1)}
              />
              <div
                className="text-primary font-bold text-xl max-w-xs w-full text-center"
                style={{
                  height: "60px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  overflow: "hidden",
                }}
              >
                {questions[step - 1]}
              </div>
              <RightIcon
                className={`cursor-pointer ${
                  step === questions.length && "opacity-20"
                }`}
                onClick={() => {
                  if (step < questions.length) {
                    setStep(step + 1);
                  } else {
                    handleSubmit();
                  }
                }}
              />
            </div>
            {renderStepInput()}
          </div>
        </div>
      )}
    </div>
  );
}

export default Waitlist;
