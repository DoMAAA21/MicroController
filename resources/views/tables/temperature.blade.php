@include('layouts.header')
<main id="main" class="main">
    <div class="col-xxl-12 col-md-12">
        <div class="card info-card sales-card">
            <div class="card-body">
                <h5 class="card-title">Temperature <span>| Table</span></h5>
                
                    <table id="temptable" class="table table-hover " style="width:100%;">
                        <thead class="thead-dark">
                            <tr>
                                <th>ID</th>
                                <th>Celcius</th>
                                <th>Status</th>
                                <th>Date</th>
                            </tr>
                        </thead>
                        <tbody id="tempbody">
                        </tbody>
                    </table>
               
            </div>
        </div>
    </div>
    </div>
</main>