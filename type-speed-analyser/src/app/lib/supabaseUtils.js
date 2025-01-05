import supabase from "../../services/supabaseClient";

export const saveWPMToDatabase = async (wpmNoDistraction, wpmWithDistraction) => {
  const { data, error } = await supabase
    .from("Type-speed-data")
    .insert([
      {
        attempt_number: 1,
        wpm_no_distraction: wpmNoDistraction,
        wpm_with_distraction: wpmWithDistraction,
        created_at: new Date(),
      },
    ]);

  if (error) {
    console.error("Error saving WPM to Supabase:", error);
  } else {
    console.log("Data saved:", data);
  }
};

export default saveWPMToDatabase;
