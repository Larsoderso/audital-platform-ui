import ArchiveIcon from "./assets/icons/archive_icon";
import DashboardIcon from "./assets/icons/dashboard_icon";
import InboxIcon from "./assets/icons/inbox_icon";
import TemplatesIcon from "./assets/icons/templates_icon";
import SpreadsheetExample from "./components/spreadsheet";
import "./styles.css";

// Main
export default function App() {
  return (
    <div className="App">
      <div className="audital_sbar">
        <div style={{ padding: "12px", display: "flex", flexDirection: "row" }}>

        <svg width={44} height={34} viewBox="0 0 44 34" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="20.2754" y={9} width="3.16484" height="19.3846" fill="#0C4FCD" />
        <rect x={20} y={30} width="3.37124" height="3.37124" fill="#2297B5" />
        <rect x={29} y="27.3838" width="3.37124" height="3.37124" transform="rotate(-45 29 27.3838)" fill="#00A88A" />
        <rect x={10} y="28.3838" width="3.37124" height="3.37124" transform="rotate(-45 10 28.3838)" fill="#E3D461" />
        <rect x="27.5879" y="10.7199" width="3.16484" height="19.3846" transform="rotate(45 27.5879 10.7199)" fill="#0C4FCD" />
        <rect x="13.9434" y="12.8204" width="3.16484" height="19.3846" transform="rotate(-45 13.9434 12.8204)" fill="#0C4FCD" />
        <rect x="12.2188" y="20.1373" width="3.16484" height="19.3846" transform="rotate(-90 12.2188 20.1373)" fill="#0C4FCD" />
        <rect y="20.4879" width="27.5601" height={13} transform="rotate(-45 0 20.4879)" fill="white" />
        <rect width="27.5601" height={13} transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 43.6797 19.89)" fill="white" />
      </svg>
        </div>

        <div
          className="audital_button_shaded"
          style={{
            border: "1px solid #EEEDEF",
            padding: "6px",
            marginLeft: "14px",
            marginRight: "14px",
            borderRadius: "4px",
            color: "#1E2A35",
            display: "flex",
            fontSize: "13px",
            paddingTop: "9px",
            paddingBottom: "9px"
          }}
        >
          <svg
            width={14}
            height={14}
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ marginRight: "16px" }}
          >
            <path
              d="M6.36697 2.26498H2.19266C1.87635 2.26498 1.57299 2.39064 1.34932 2.61431C1.12565 2.83797 1 3.14133 1 3.45764V11.8063C1 12.1226 1.12565 12.4259 1.34932 12.6496C1.57299 12.8733 1.87635 12.9989 2.19266 12.9989H10.5413C10.8576 12.9989 11.1609 12.8733 11.3846 12.6496C11.6083 12.4259 11.7339 12.1226 11.7339 11.8063V7.63195"
              stroke="#1E2A35"
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M10.8396 1.37051C11.0768 1.13328 11.3986 1 11.7341 1C12.0696 1 12.3913 1.13328 12.6286 1.37051C12.8658 1.60775 12.9991 1.92951 12.9991 2.26501C12.9991 2.60051 12.8658 2.92227 12.6286 3.1595L6.96344 8.82463L4.57812 9.42096L5.17445 7.03564L10.8396 1.37051Z"
              stroke="#1E2A35"
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          New Audit{" "}
        </div>
        <div className="audital_sbar_topm_group">
          <div className="audital_sbar_topm_item">
            <DashboardIcon width={16} height={16} />
            <div className="audital_sbar_topm_item_txt"> Dashboard </div>
          </div>
          <div className="audital_sbar_topm_item">
            <svg
              width={11}
              height={10}
              viewBox="0 0 11 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ width: "16px", height: "16px" }}
            >
              <path
                d="M0.850464 6.02765L4.3633 3.79221C4.654 3.60722 5.064 3.5 5.5 3.5C5.93599 3.5 6.346 3.60722 6.6367 3.79221L10.1495 6.02765C10.4377 6.21103 10.5 6.39401 10.5 6.5C10.5 6.60599 10.4377 6.78897 10.1495 6.97235L6.6367 9.20779C6.346 9.39278 5.93599 9.5 5.5 9.5C5.064 9.5 4.654 9.39278 4.3633 9.20779L0.850464 6.97235C0.562298 6.78897 0.5 6.60599 0.5 6.5C0.5 6.39401 0.562298 6.21103 0.850464 6.02765Z"
                fill="white"
                stroke="#686D74"
              />
              <path
                d="M0.850464 3.02765L4.3633 0.792211C4.654 0.607222 5.064 0.5 5.5 0.5C5.93599 0.5 6.346 0.607222 6.6367 0.792211L10.1495 3.02765C10.4377 3.21103 10.5 3.39401 10.5 3.5C10.5 3.60599 10.4377 3.78897 10.1495 3.97235L6.6367 6.20779C6.346 6.39278 5.93599 6.5 5.5 6.5C5.064 6.5 4.654 6.39278 4.3633 6.20779L0.850464 3.97235C0.562298 3.78897 0.5 3.60599 0.5 3.5C0.5 3.39401 0.562298 3.21103 0.850464 3.02765Z"
                fill="white"
                stroke="#686D74"
              />
            </svg>
            <div className="audital_sbar_topm_item_txt"> Views </div>
          </div>
          <div className="audital_sbar_topm_item">
            <ArchiveIcon width={16} height={16} />
            <div className="audital_sbar_topm_item_txt"> Archive </div>
          </div>
          <div className="audital_sbar_topm_item">
            <TemplatesIcon width={16} height={16} />
            <div className="audital_sbar_topm_item_txt"> Templates </div>
          </div>
          <div className="audital_sbar_topm_item">
            <InboxIcon width={16} height={16} />
            <div className="audital_sbar_topm_item_txt"> Inbox </div>
          </div>
        </div>

        <div className="audital_sbar_topm_H">
          <div className="audital_audit_grp_heading"> Audits </div>
        </div>
        <div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              height: "14px",
              lineHeight: "14px",
              paddingLeft: "12px",
              fontSize: "14px"
            }}
          >
            <svg
              width={12}
              height={8}
              viewBox="0 0 12 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ marginRight: "12px", height: "14px", width: "8px" }}
            >
              <path
                d="M6 7.33331L11.1962 0.333313H0.803848L6 7.33331Z"
                fill="#595959"
              />
            </svg>
            <div style={{ color: "grey" }}>Interne Audits</div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              height: "14px",
              lineHeight: "14px",
              paddingLeft: "32px",
              fontSize: "14px",
              paddingTop: "8px"
            }}
          >
            <div style={{ color: "#585252" }}>Access Management</div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              height: "14px",
              lineHeight: "14px",
              paddingLeft: "32px",
              fontSize: "14px",
              paddingTop: "8px"
            }}
          >
            <div style={{ color: "#585252" }}>Software Development</div>
          </div>

          <div style={{paddingTop: 14}}>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              height: "14px",
              lineHeight: "14px",
              paddingLeft: "12px",
              fontSize: "14px"
            }}
          >
            <svg
              width={12}
              height={8}
              viewBox="0 0 12 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ marginRight: "12px", height: "14px", width: "8px" }}
            >
              <path
                d="M6 7.33331L11.1962 0.333313H0.803848L6 7.33331Z"
                fill="#595959"
              />
            </svg>
            <div style={{ color: "grey" }}>Vendor Audits</div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              height: "14px",
              lineHeight: "14px",
              paddingLeft: "32px",
              fontSize: "14px",
              paddingTop: "8px"
            }}
          >
            <div style={{ color: "#585252" }}>Vendor A</div>
          </div>
</div>
        </div>
      </div>
      <SpreadsheetExample style={{ width: "100%" }} />
    </div>
  );
}
