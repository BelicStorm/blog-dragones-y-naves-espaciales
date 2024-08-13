import React from "react"
import { Modal } from "react-responsive-modal";
function PrioritizeModal({ onClose, open }) {
    return (
      <Modal open={open} onClose={onClose} center>
        <header>Vote for your favorite fields</header>
        <section className="fields">
          <div className="field">
            <input type="checkbox" id="1" name="1" />
            <label htmlFor="1">Link</label>
          </div>

          <div className="field">
            <input type="checkbox" id="2" name="2" />
            <label htmlFor="2">Content Relationship</label>
          </div>

          <div className="field">
            <input type="checkbox" id="3" name="3" />
            <label htmlFor="3">Boolean</label>
          </div>

          <div className="field">
            <input type="checkbox" id="4" name="4" />
            <label htmlFor="4">Group</label>
          </div>

          <div className="field">
            <input type="checkbox" id="5" name="5" />
            <label htmlFor="5">Number</label>
          </div>

          <div className="field">
            <input type="checkbox" id="6" name="6" />
            <label htmlFor="6">Link to Media</label>
          </div>

          <div className="field">
            <input type="checkbox" id="7" name="7" />
            <label htmlFor="7">Date</label>
          </div>

          <div className="field">
            <input type="checkbox" id="8" name="8" />
            <label htmlFor="8">Timestamp</label>
          </div>

          <div className="field">
            <input type="checkbox" id="9" name="9" />
            <label htmlFor="9">Integration Fields</label>
          </div>

          <div className="field">
            <input type="checkbox" id="10" name="10" />
            <label htmlFor="10">Embed</label>
          </div>

          <div className="field">
            <input type="checkbox" id="11" name="11" />
            <label htmlFor="11">Color</label>
          </div>

          <div className="field">
            <input type="checkbox" id="12" name="12" />
            <label htmlFor="12">Geopoint</label>
          </div>
          <button onClick={onClose} className="primary">
            Vote
          </button>
        </section>
      </Modal>
    );
}

export default PrioritizeModal